import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {

  open: boolean = false;
  openNav: boolean = true;
  mob: boolean = false;
  nav: boolean = true;
  inside: boolean = false;

  openMenu(){
    this.openNav = !this.openNav;
    this.mob = !this.mob
    this.nav = !this.nav
  }

  openMenu1(){
    this.inside = !this.inside
    this.nav = !this.nav
    this.openNav = !this.openNav;
  }

  openPopup(){
    this.open = !this.open;
  }

  openIn(){
    this.inside = !this.inside
    this.mob = !this.mob
  }

  backIn(){
    this.inside = !this.inside
    this.mob = !this.mob
  }

  popupImages: Array<any> = [
    {imgUrl: '../../assets/pexels-james-wheeler-417074.jpg', name: 'Salt Lake City'},
    {imgUrl: '../../assets/pexels-albert-white-361104.jpg', name: 'Salt Lake City'},
    {imgUrl: '../../assets/pexels-pixabay-414171.jpg', name: 'Salt Lake City'},
    {imgUrl: '../../assets/pexels-eberhard-grossgasteiger-1670187.jpg', name: 'Salt Lake City'},
  ]

  popupInfo: Array<any> = [
    {name1: 'Ligula Condimentum', name2: 'Elementum', name3: 'Aenean', name4: 'Pellentesque', name5: 'Curabitur'},
    {name1: 'Porttitor', name2: 'Molestie', name3: 'Fusce Rhoncus Mi', name4: 'Sagittis', name5: 'Suspendisse'},
    {name1: 'Donec Quis Purus', name2: 'Ultricies', name3: 'Nullam', name4: 'Molestie Tortor', name5: 'Maximus'},
    {name1: 'Volutpat', name2: 'Curabitur Gravida', name3: 'Nullam Laoreet', name4: 'Imperdiet', name5: 'Aliquam Malesuada'},
  ]

  type1: Array<any> = [
    {name: 'Ligula Condimentum'}, {name: 'Elementum'}, {name: 'Aenean'}, {name: 'Pellentesque'}, {name: 'Curabitur'}
  ]

  type2: Array<any> = [
    {name: 'Porttitor'}, {name: 'Molestie'}, {name: 'Fusce Rhoncus Mi'}, {name: 'Sagittis'}, {name: 'Suspendisse'}
  ]

  type3: Array<any> = [
    {name: 'Donec Quis Purus'}, {name: 'Ultricies'}, {name: 'Nullam'}, {name: 'Molestie Tortor'}, {name: 'Maximus'}
  ]

  type4: Array<any> = [
    {name: 'Volutpat'}, {name: 'Curabitur Gravida'}, {name: 'Nullam Laoreet'}, {name: 'Imperdiet'}, {name: 'Aliquam Malesuada'}
  ]

  scrollInfo: Array<any> = [
    {type: 'Sports'},
    {type: 'Leisure'},
    {type: 'Extreme'},
    {type: 'Kids'},
    {type: 'Elderly'},
    {type: 'Sports'},
    {type: 'Leisure'},
    {type: 'Extreme'},
  ]

  activity: boolean = false;
  types: boolean = true;
  act1: boolean = false;
  act2: boolean = false;
  act3: boolean = false;
  act4: boolean = false;

  backTypes(){
    this.activity = !this.activity;
    this.types = !this.types;
    if(this.act1 == true || this.act2 == true || this.act3 == true || this.act4 == true){
      this.act1 = false;
      this.act2 = false;
      this.act3 = false;
      this.act4 = false;
    }
  }

  activity1(){
    this.types = !this.types;
    this.activity = !this.activity;
    this.act1 = !this.act1;
    this.act2 = false;
    this.act3 = false
    this.act4 = false;
  }

  activity2(){
    this.types = !this.types;
    this.activity = !this.activity;
    this.act2 = !this.act2;
    this.act1 = false;
    this.act3 = false
    this.act4 = false;
  }

  activity3(){
    this.types = !this.types;
    this.activity = !this.activity;
    this.act3 = !this.act3;
    this.act2 = false;
    this.act1 = false
    this.act4 = false;
  }

  activity4(){
    this.types = !this.types;
    this.activity = !this.activity;
    this.act4 = !this.act4;
    this.act2 = false;
    this.act3 = false
    this.act1 = false;
  }
}
