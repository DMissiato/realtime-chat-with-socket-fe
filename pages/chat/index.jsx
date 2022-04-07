
import Head from 'next/head'
import { useState, useEffect, useCallback, useRef } from 'react'
import { socket } from '../../libs/socket'
import { useRouter } from 'next/router'
import styles from './Chat.module.scss'


const Chat = ({ lobby, username }) =>
{
    // Hooks & State
    const router = useRouter();
    const chatRef = useRef();

    const [messages, setMessages] = useState([]);
    const [textMsg, setTextMsg] = useState('');


    const joinLobby = useCallback(() =>
    {
        if(!lobby || !lobby.trim() || !username || !username.trim())
        {
            router.push('/');
        }

        socket.emit('userConnection', { username, lobby });
    }, [lobby, username, router]);

    useEffect(() => 
    {
        socket.on('connect', () =>
        {
            joinLobby(socket);
            // Debug
            console.log('Socket Connected!');
        });

        socket.on('msg', (data) =>
        {
            const msg = {
                idUser: data.idUser,
                username: data.username,
                message: data.message 
            };

            setMessages(state => [...state, msg]);
        });

    }, [joinLobby]);

    useEffect(() =>
    {
        chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    }, [messages]);

    
    // Events
    const handleInputText = (e) =>
    {
        setTextMsg(e.target.value);
    }

    const sendMessage = (e) =>
    {
        e.preventDefault();

        if(textMsg.trim())
        {
            socket.emit('chat', textMsg);
            setTextMsg('');
        }
    }

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Realtime Chat</title>
            </Head>
            <div>
                <span className={styles.title}>{username}</span>
                {lobby}
            </div>
            <div className={styles.chat} ref={chatRef}>
                {
                    messages.map(msg => 
                    (
                        (msg.username === username) ?
                            <div className={`${styles.message} ${styles.right}`}>
                                {msg.message}
                            </div>
                        :
                            <div className={styles.message}>
                                <div className={styles.sender}>{msg.username}</div>
                                {msg.message}
                            </div>
                    ))
                }
            </div>
            <form className={styles.newMsgInput}>
                <input type='text' value={textMsg} onChange={handleInputText} placeholder='Messaggio' autoComplete='off' maxLength='300' />
                <input type='submit' onClick={sendMessage} />
            </form>
        </div>
    )
}

Chat.getInitialProps = async ({ query }) =>
{
    return { lobby: query.lobby, username: query.username };
}

export default Chat;
