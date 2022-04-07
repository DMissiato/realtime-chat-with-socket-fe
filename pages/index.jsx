
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Home.module.scss'


const Home = () => 
{
  const router = useRouter();

  // State
  const [username, setUsername] = useState('');
  const [lobby, setLobby] = useState('');

  // Events
  const handleInputUsername = (e) =>
  {
    setUsername(e.target.value);
  }

  const handleInputLobby = (e) =>
  {
    setLobby(e.target.value);
  }

  const handleSubmit = (e) =>
  {
    e.preventDefault();

    if(!username.trim() || !lobby.trim())
    {
      alert('L\'username e il nome della lobby sono obbligatori!');
      return;
    }

    router.push({ pathname: '/chat', query: { lobby: lobby, username: username } });
  }


  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Realtime Chat - Login</title>
      </Head>
      
      <form>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={handleInputUsername} value={username} placeholder='Scrivi qui il tuo username' maxLength='16' />
        <label htmlFor='lobby'>Lobby</label>
        <input id='lobby' type='text' onChange={handleInputLobby} value={lobby} placeholder='Scrivi qui il nome della lobby' maxLength='12' />

        <input type='submit' value='Entra' onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default Home;
