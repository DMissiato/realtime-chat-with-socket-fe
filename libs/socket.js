
import io from 'socket.io-client'

const socket = io.connect('https://damp-wildwood-91491.herokuapp.com/');

export {
    socket
}