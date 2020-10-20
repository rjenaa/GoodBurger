import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-menu';

  total = 0.00;
    Quantity = 0;


  foodMenu = [{
    "name": "Fries",
    "Description": "Oily, Salty and hot",
    "Price": 50.00,
    "Quantity": 0,
    "image": "https://cdn2.vectorstock.com/i/1000x1000/32/11/fast-food-french-fries-cartoon-flat-style-vector-17703211.jpg"

  },
  {
    "name": "Burger",
    "Description": "Beefy, fresh, & hot",
    "Price": 10.00,
    "Quantity": 0,
    "image": "https://illustoon.com/photo/4728.png"
  },
  {
    "name": "Soda",
    "Description": "Sweeter than water",
    "Price": 30.00,
    "Quantity": 0,
    "image": "https://previews.123rf.com/images/aratehortua/aratehortua1712/aratehortua171200397/91965484-vector-cartoon-soda-cup-isolated-on-white-background.jpg"
  }]

    addPrice(input1){
      //updateQuantity(input1);

      var add: number;
      add = parseFloat(input1.Price);
      this.total += (add);
    }
    subPrice(input1){
      if(input1.Quantity - 1 < 0){
        return;
      }
      var sub: number;
      sub = parseFloat(input1.Price);
      if(this.total - sub < 0){
        return;
      }
      this.total -= (sub);
    }

    addItem(input1){


      var add: number;
      add = parseFloat(input1.Quantity);
      (input1.Quantity++)
      this.Quantity ++;
    }
    subItem(input1){
      
      var sub: number;
    sub = parseFloat(input1.Quantity);
      if(input1.Quantity - 1 < 0 || this.Quantity - 1< 0){
        return;
      }
      this.Quantity--
      (input1.Quantity--)
    } 
    updateQuantity(){
   
      this.Quantity = this.foodMenu[0].Quantity + this.foodMenu[1].Quantity + this.foodMenu[2].Quantity;
      this.total = this.foodMenu[0].Quantity*this.foodMenu[0].Price + this.foodMenu[1].Quantity*this.foodMenu[1].Price + this.foodMenu[2].Quantity*this.foodMenu[2].Price;
    }

    ngOnInIt(){}

   
  
}
