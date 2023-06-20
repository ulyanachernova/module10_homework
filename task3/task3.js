const wsUri = "wss://echo-ws-service.herokuapp.com";
const wsUriGeo = "https://www.openstreetmap.org/";

const btnSend = document.querySelector('.button-send')
const output = document.querySelector('.chat-message')
const txt = document.querySelector('.input-text')
const btnGeo = document.querySelector('.button-geo')

function writeToScreenSend(message) {
    let pre = document.createElement("div");
    pre.className = 'icon-mes mes-send';
    pre.innerHTML = message;
    output.appendChild(pre);
}
function writeToScreenAnswer(message) {
    let pre = document.createElement("div");
    pre.className = 'icon-mes mes-answer';
    pre.innerHTML = message;
    output.appendChild(pre);
}
    
btnSend.addEventListener('click', () => {
    let mes = txt.value;
    if (mes.length != 0) {
        writeToScreenSend(mes);
        let websocket = new WebSocket(wsUri);
        websocket.onopen = function(evt) {
            websocket.send(mes);
        };
        websocket.onmessage = function(evt) {
            writeToScreenAnswer(mes);
        }
    }
});

btnGeo.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        console.log(coords.latitude, coords.longitude);
        let pre = document.createElement("div");
        pre.className = 'icon-mes mes-link';
        let link =  document.createElement("a"); 
        link.target = "_blank";
        link.textContent = 'Гео-локация'
        link.href = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`
        pre.appendChild(link);
        output.appendChild(pre);
        }) 
})




