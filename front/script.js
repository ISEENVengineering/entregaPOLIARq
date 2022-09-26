import {Usuario} from './models/Class_usuario';

function IniciarSesion() {
    let emailToSend = document.getElementById('emailToSend').value;
    let pswToSend = document.getElementById('pswToSend').value;

    const U = new Usuario();
    console.log(U.saveGames('holass'));

}