import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Image } from 'src/app/models/images';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/images.service';


@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  car : Car[]
  images : Image[]
  imageBasePath = "https://localhost:44365/"
  defaultImage ="/images/default.png"

  constructor(private carService : CarService, private activatedRoute : ActivatedRoute, private imageService : ImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
    if(params["carId"]){
      this.getCarById(params["carId"])
      this.getImagesByCarId(params["carId"])
    }
    })
  }
  getCarById(id : number){
  this.carService.getCarsByCarId(id).subscribe((response) => {
    this.car = response.data
  })
  }

  getImagesByCarId(id : number){
    this.imageService.getImageByCarId(id).subscribe((response) => {
    this.images = response.data
  console.log(this.images)
  })

  }
  getSliderClass(index: number) {
    if (index == 0) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

}
