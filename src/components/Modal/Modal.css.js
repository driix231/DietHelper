import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

export const ModalBody = styled(Modal.Body)`

    height: 500px;
    font-size:15px;
    overflow-y: scroll;
    @media(max-width: 767px){
        height: 150px;
        font-size:10px;
    }
`

export const ModalFooter = styled(Modal.Footer)`
    width: 100%;
    font-size:25px;
    margin: 0 auto;
`

export const ModalMain = styled(Modal)`
@media(max-width: 767px){
    width:350px;
    height:600px;
}
`