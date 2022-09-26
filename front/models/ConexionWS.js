function ConexWSAPI(estadoApp) {
    let socketAPi = null
    if (estadoApp) {
        socketAPi = new WebSocket("ws://localhost:3000");
    }
    return socketAPi
}