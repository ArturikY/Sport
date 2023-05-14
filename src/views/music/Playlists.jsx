import React, { useState } from 'react'

import styles from './Playlists.module.scss'
import { deleteEl } from '../../services/deleteEl'


export const Playlists = ({ 
  setOpenPlaylists, listPlaylists, setListPlaylists, listMusic
}) => {
  
  const [playlist, setPlaylist] = useState({
    title: '', listMusic: []
  })

  const createPlaylist = (e) => {
    e.preventDefault()
    const newPlaylist = {
      title: playlist.title,
      listMusic: playlist.listMusic
    }

    setListPlaylists(prev => [...prev, newPlaylist])
    setPlaylist({title: '', listMusic: []})
  }

  
  return (
    <div className={styles.container}>
      <div onClick={() => setOpenPlaylists(false)}
      className={`icon-prev ${styles.prev}`} />
      <div className={styles.head}>
        <div className={styles.titlePage}>Playlists</div>
        <form className={styles.form}>
          <input type="text" className={styles.input}
          onChange={e => setPlaylist(prev => ({...prev, title: e.target.value}))} value={playlist.title}
          />
          <button onClick={e => createPlaylist(e)}
          type='reset' className={styles.btn}>Add</button>
        </form>
      </div>
      <div className={styles.listPlaylist}>
        {
          listPlaylists.map((playlist, index) => (
          <div key={index} className={styles.playlist}>
            <a class={`btn btn-primary ${styles.titlePlay}`} data-bs-toggle="collapse" href={`#collapseExample${index}`} role="button" aria-expanded="false" aria-controls="collapseExample">
              {playlist.title}
              <div onClick={() => deleteEl(listPlaylists, playlist)}
              className='icon-delete' />
            </a>
            <div class="collapse" id={`collapseExample${index}`}>
              <div class={`card card-body ${styles.songs}`}>
                {
                  playlist.listMusic.map((music, index) => (
                    <div key={index} className={styles.song}>
                      <div className={styles.info}>
                        <div className={styles.title}>{music.title}</div>
                        <div className={styles.autor}>{music.autor}</div>
                      </div>
                      <div onClick={() => {
                        deleteEl(playlist.listMusic, music)
                        deleteEl(listMusic, music)
                      }}
                      className={`icon-delete ${styles.delete}`} />
                    </div>
                  ))
                }
              </div>
            </div>   
          </div>
          ))
        }
      </div>
    </div>
  )
}