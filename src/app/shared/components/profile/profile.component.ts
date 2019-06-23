import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/Abhi.jpg';
  userName: string = 'Abhimanyu Karn';
  userPost: string = 'Software Developer';
  
  constructor() { }

  ngOnInit() {
  }

}
