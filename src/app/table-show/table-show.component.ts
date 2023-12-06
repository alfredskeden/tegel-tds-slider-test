import { Component } from '@angular/core';

type allUserDtlT = {
  globalUserId: string;
  userDataBase: string;
  userRoleName: string;
};

@Component({
  selector: 'app-table-show',
  templateUrl: './table-show.component.html',
  styleUrls: ['./table-show.component.css'],
})
export class TableShowComponent {
  modalShow = false;

  openModal = async (user: allUserDtlT) => {
    console.log(user);
    const modifyUserModal = document.getElementById('modify-user-modal') as any;
    await modifyUserModal.showModal();
  };

  closeModal = () => {
    this.modalShow = false;
  };

  allUserDtl: allUserDtlT[] = [
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
