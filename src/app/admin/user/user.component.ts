import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  isLoading: boolean = true;
  users: User[] = []
  showModal: boolean = false;
  roles: any[] = [];

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  
    this.userService.getAll().subscribe(data => {
      this.users = data;
      this.isLoading = false;
    }, error => {
      this.users = [];
    });
  }

  onShowModal(roles:any[]){
    this.roles = roles
    this.showModal = true;
  }
  onCloseModal(){
    this.showModal = false;
  }

}
