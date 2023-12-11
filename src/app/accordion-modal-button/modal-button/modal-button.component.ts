import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css'],
})
export class ModalButtonComponent {
  @Input() modalId: string = '';

  modalShow = false;

  openModal = async () => {
    const modifyUserModal = document.getElementById(
      `modal-${this.modalId}`
    ) as any;
    await modifyUserModal.showModal();
  };

  closeModal = () => {
    this.modalShow = false;
  };
}
