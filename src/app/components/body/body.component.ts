import { Component, OnInit } from '@angular/core';
import listUsers from 'src/assets/json/users.json';
import listRoles from 'src/assets/json/users.json'
import { faGripVertical,faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import {UsersService,User} from '../../services/users.service';
import {CdkDragDrop,moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
faGripVertical = faGripVertical;
 faTrashAlt= faTrashAlt;
faEdit=faEdit;
users:User[]=[];
roles:any[]=[];
  constructor(private _usersService:UsersService,private _rolesService:UsersService) { }

  ngOnInit() {
    this.users = this._usersService.getUsers();
    this.roles=this._rolesService.getRoles();
  }
onDropped(event:CdkDragDrop<any>){
 
  const previous=event.previousIndex;
  const now=event.currentIndex;
  moveItemInArray(this.users,previous,now)
}
  searchUsers(termino:string){
            let usersArr:User[]=[]
            termino=termino.toLowerCase();
            for(let i=0; i<this.users.length; i++){
                let user=this.users[i];
                let name=user.name.toLowerCase();
                if(name.indexOf(termino)>=0){
                    user.idx=i;
                    usersArr.push(user)
                }

            }
         
     }

 remove(item){ 

      let index=this.users.indexOf(item)
     this.users.splice(index,1);     
    }
}
