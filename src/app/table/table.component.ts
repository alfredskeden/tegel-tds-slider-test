import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  allUserDtl = [
    {
      globalUserId: '123421',
      userDataBase: '23234',
      userRoleName: 'Alfred 1',
    },
    {
      globalUserId: '123422',
      userDataBase: '23233',
      userRoleName: 'Alfred 2',
    },
    {
      globalUserId: '123423',
      userDataBase: '23232',
      userRoleName: 'Alfred 3',
    },
    {
      globalUserId: '123424',
      userDataBase: '23231',
      userRoleName: 'Alfred 4',
    },
  ];

  dataBaseMasterDtl = [
    {
      dbId: 'hej',
      dbName: 'lol',
    },
  ];

  roleMasterDtl = [
    {
      roleId: 'hej',
      roleName: 'lol',
    },
  ];

  updateUser = {
    userName: new Event('userName'),
    fullName: new Event('fullName'),
    email: new Event('email'),
    role: new Event('role'),
    database: new Event('database'),
  };

  updateUserDetails = () => {
    console.log('i come here');
  };
}
