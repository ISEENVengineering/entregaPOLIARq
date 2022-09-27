class Usuario {
    constructor(id, nombres, apellidos, emailAddrs, psw, edad, numJuegos, juegos, rol) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.emailAddrs = emailAddrs;
        this.psw = psw;
        this.edad = edad;
        this.numJuegos = numJuegos;
        this.juegos = juegos;
        this.rol = rol;
        console.log('Usuario creado');
    }
    get() {
        json_user = {
            id: this.id,
            nombres: this.nombres,
            apellidos: this.apellidos,
            emailAddrs: this.emailAddrs,
            psw: this.psw,
            edad: this.edad,
            numJuegos: this.numJuegos,
            juegos: this.juegos,
            rol: this.rol
        }
        return json_user
    }

    set(id, nombres, apellidos, emailAddrs, psw, edad, numJuegos, juegos, rol) {

        this.id = idRandom(emailAddrs, 10);
        this.emailAddrs = emailAddrs;
        this.psw = pswToSend;
        this.rol = this.InputRolUser;

        return { _: this.id, a: this.emailAddrs, b: this.psw, c: this.rol }
    }
}

function EnviarDatos(ws) {
    var emailToSend = document.getElementById('emailToSend').value;
    var pswToSend = document.getElementById('pswToSend').value;
    var InputRolUser = document.getElementById('InputRolUser').value;


    var Usr = new Usuario()
    Usr.set(
        idRandom(emailToSend, 32),
        '',
        '',
        emailToSend,
        pswToSend,
        0,
        0,
        '',
        InputRolUser
    )
    datos = Usr.get()

    ws.send(JSON.stringify(datos));
    alert("enviando datos...");
}

function idRandom(variable, length) {
    let result = ''
    const characters = `${variable}+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}