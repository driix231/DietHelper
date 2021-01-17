import { makeAutoObservable, observable } from "mobx";


class ModalControll {

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
