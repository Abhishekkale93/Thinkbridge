import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
  restaurant: Restaurant = {
    id: 0,
    name: '',
    description: '',
    location: '',
    phoneNumber: ''
  };

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        
        this.restaurant.id = id; 
        console.log('Restaurant ID:', this.restaurant.id); 
        this.restaurantService.getRestaurant(this.restaurant.id).subscribe(
          (data: Restaurant) => {
            this.restaurant = data;
            console.log('Fetched Restaurant:', this.restaurant);
          },
          (error) => console.error(error)
        );
      } else {
        console.error('Invalid restaurant ID');
      }
    });
  }

  updateRestaurant(): void {
    console.log('Updating Restaurant:', this.restaurant);
    if (this.restaurant.id) {
      this.restaurantService.updateRestaurant(this.restaurant.id, this.restaurant).subscribe(
        () => this.router.navigate(['/restaurants']),
        (error) => console.error(error)
      );
    } else {
      console.error('Restaurant ID is not valid');
    }
  }
}
