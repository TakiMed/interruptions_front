import { Component, OnInit } from '@angular/core';
import { Role } from './role.model';
import { RoleService } from './role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {
  roles: Role[] =[];
  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.getAll().subscribe(data=> {
      console.log(data);
      this.roles=data; });
  }

}
