import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurrantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurrantsService.reviewsOfRestaurants(this.route.parent.snapshot.params['id'])
  }

}
