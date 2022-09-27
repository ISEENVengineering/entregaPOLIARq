import Usuario from './models/Class_usuario';
import idRandom from './models/idRandom';

function EnviarDatos(ws) {
    var emailToSend = document.getElementById('emailToSend').value;
    var pswToSend = document.getElementById('pswToSend').value;
    var InputRolUser = document.getElementById('InputRolUser').value;


    datos = {
        a: emailToSend,
        b: pswToSend,
        c: InputRolUser
    }

    ws.send(JSON.stringify(datos));
    alert("enviando datos...");


}