export class Usuario {
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
    }

    sendEMails(datos) {
        let resp = null;
        if (datos !== null) {
            console.log('sending email')
        }
        return resp;
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