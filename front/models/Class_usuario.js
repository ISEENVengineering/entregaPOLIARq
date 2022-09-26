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
    /*
       InputName: req.body.InputName,
           InputLastN: req.body.InputLastN,
           emailToSend: req.body.emailToSend,
           pswToSend: req.body.pswToSend,
           InputYOld: req.body.InputYOld,
           InputRolUser: req.body.InputRolUser
       */

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
   
    sendEMails(pathAPI, datos) {
        console.log('sending email: ', datos.InputName)

        return datos;
    }

    listGames(datos) {
        let resp = null;
        if (datos !== null) {
            console.log('listing games')
        }
        return resp;
    }

    searchGames(datos) {
        let resp = null;
        if (datos !== null) {
            console.log('searching games')
        }
        return resp;
    }
    saveGames(datos) {
        let resp = null;
        if (datos !== null) {
            console.log('saving games');
            resp = datos;
        }
        return resp;
    }
    deleteGames(datos) {
        let resp = null;
        if (datos !== null) {
            console.log('delete games');
        }
        return resp;
    }
    searchDataUser(datos) {
        let resp = null;
        if (datos !== null) {
            console.log('seaching user');
        }
        return resp;
    }
    saveDataUSer(datos) {
        let resp = null;
        if (datos !== null) {
            console.log('save user');
        }
        return resp;
    }
    editDataUser(datos) {
        let resp = null;
        if (datos !== null) {
            console.log('edit user');
        }
        return resp;
    }
    deleteUser(datos) {
        let resp = null;
        if (datos !== null) {
            console.log('delete User');
        }
        return resp;
    }
}

module.exports = Usuario