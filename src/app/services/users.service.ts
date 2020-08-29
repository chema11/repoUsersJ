import {Injectable} from '@angular/core';
import listUsers from 'src/assets/json/users.json'
import listRoles from 'src/assets/json/roles.json'
@Injectable()
export class UsersService{

private users:User[]=listUsers.users
private roles:any[]=listRoles.roles
    constructor() {
        
     }

     getUsers(){
         return this.users;
     }
getRoles(){
    return this.roles;
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

            
            return usersArr;
     }

}

export interface User{
    picture:string,
      name: string,
      fathersLastName: string,
      mothersLastName: string,
     email: string,
      roleId: number,
      active: boolean ,
      idx?:number
}