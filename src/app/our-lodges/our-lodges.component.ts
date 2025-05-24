import { Component } from '@angular/core';

@Component({
  selector: 'app-our-lodges',
  templateUrl: './our-lodges.component.html',
  styleUrls: ['./our-lodges.component.less']
})
export class OurLodgesComponent {

  apertment:Array<any> = [
    {imgUrl: '../../assets/pexels-max-vakhtbovych-7061663.jpg', price: 399},
    {imgUrl: '../../assets/pexels-maria-orlova-4906249.jpg', price: 599},
    {imgUrl: '../../assets/pexels-vlada-karpovich-7903178.jpg', price: 699}
  ]

  filter:Array<any> = [
    {filterName: 'Room', srr: {name1: 'Room 1', name2: 'Room 2', name3: 'Room 3', name4: 'Room 4'},},
    {filterName: 'Type', srr: {name1: 'Type 1', name2: 'Type 2', name3: 'Type 3', name4: 'Type 4'},},
    {filterName: 'Price', srr: {name1: '₹-25000', name2: '₹-35000', name3: '₹-45000', name4: '₹-55000'},},
    {filterName: 'Service', srr: {name1: 'Services 1', name2: 'Services 2', name3: 'Services 3', name4: 'Services 4'},},
  ]

  selectName: Array<any> = [
    {name1: 'Room 1', name2: 'Room 2', name3: 'Room 3', name4: 'Room 4'},
    {name1: 'Type 1', name2: 'Type 2', name3: 'Type 3', name4: 'Type 4'},
    {name1: '25000', name2: '35000', name3: '45000', name4: '55000'},
    {name1: 'Services', name2: 'Services', name3: 'Services', name4: 'Services'},
  ]

}
