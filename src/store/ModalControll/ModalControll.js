import { makeAutoObservable } from "mobx";


class ModalControll {

    //akcje dotyczace modal

    isOpenModalName = "";

    constructor() {
        makeAutoObservable(this)
    }

    openModal(name) {
        this.isOpenModalName = name;
        console.log(this.isOpenModalName)
    }

    hideModal() {
        this.isOpenModalName = "";
    }
    
}

const modalControll = new ModalControll();
window.modalControll = modalControll;
export { modalControll };
