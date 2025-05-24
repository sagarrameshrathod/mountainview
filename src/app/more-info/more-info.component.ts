import { Component } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.less']
})
export class MoreInfoComponent {

  visite: Array<any> = [
    {
      imgUrl: '../../assets/pexels-simon-sikorski-1131573.jpg', 
      title: 'Malory Place', 
      desc: 'Nulla pellentesque laoreet ultrices. Phasellus nec lectus mi. Praesent volutpa.'
    },
    {
      imgUrl: '../../assets/pexels-pixabay-147411.jpg',
      title: 'Cottage With a View',
      desc: 'Ut id ipsum eget leo vestibulum egestas. Etiam porta, nisi ac rhoncus facilisis.'
    },
    {
      imgUrl: '../../assets/pexels-ben-mack-6775268.jpg',
      title: 'Blue Mountain Top', 
      desc: 'Vestibulum justo orci, consectetur id arcu id, porttitor maximus nulla. Praesent faucibus commodo mattis.'
    },
  ]

  about:string = ' Donec blandit maximus dolor nec bibendum. Integer interdum, ipsum id rhoncus luctus, orci eros dictum sem, at congue nulla justo id diam. Suspendisse potenti. nec pretium eros luctus.';
  name:string = 'Cristopher Merket'
  title:string =  'Jul-Jul 2023 Malory Place Renter';
  id:number = 0;

  renterInfo: Array<any> = [
    {
      about: ' Donec blandit maximus dolor nec bibendum. Integer interdum, ipsum id rhoncus luctus, orci eros dictum sem, at congue nulla justo id diam. Suspendisse potenti.',
      name: 'Sntadar Merket',
      title: 'Set-Set 2023 Mysore Place Renter'
    },
    {
      about: ' Ipsum id rhoncus luctus, orci eros dictum sem, at congue nulla justo id diam. Suspendisse potenti. Donec accumsan nibh ut purus pulvinar, nec pretium eros luctus.',
      name: 'Cristopher Merket',
      title: 'Oct-Oct 2023 Vijayapura Place Renter'
    },
    {
      about: ' Donec blandit maximus dolor nec orci eros dictum sem, at congue nulla justo id diam. Suspendisse potenti. Donec accumsan nibh ut purus pulvinar, nec pretium eros luctus.',
      name: 'Encontaper Merket',
      title: 'Nov-Nov 2023 Malory Place Renter'
    },
    {
      about:' Donec blandit maximus dolor nec bibendum. Integer interdum, ipsum id rhoncus luctus, orci eros dictum sem, at congue nulla justo id diam. Suspendisse potenti.nec pretium eros luctus.',
      name : 'Cristopher Merket',
      title:  'Jul-Jul 2023 Malory Place Renter',
    }
  ]

  leftClick(){
    this.id = this.id-1;
    if(this.id < 0){
      this.id = this.renterInfo.length-1;
    }

    this.about = this.renterInfo[this.id].about;
    this.name = this.renterInfo[this.id].name;
    this.title = this.renterInfo[this.id].title;
  }
  
  rightClick(){
    this.id = this.id+1;
    if(this.id >= this.renterInfo.length){
      this.id=0;
    }
      this.about = this.renterInfo[this.id].about;
      this.name = this.renterInfo[this.id].name;
      this.title = this.renterInfo[this.id].title;
    
  }
  
  
}
