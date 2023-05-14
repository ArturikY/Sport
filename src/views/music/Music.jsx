import React, { useState } from "react";

import styles from './Music.module.scss'
import { Navigation } from '/src/components/display/Navigation.jsx'
import { Add } from "./Add";
import { HeadMusic } from '../../components/display/HeadMusic.jsx'
import { Library } from './Library.jsx'


export const Music = () => {

  const [openAdd, setOpenAdd] = useState(true)
  const [openLibrary, setOpenLibrary] = useState(false)

  const [listMusic, setListMusic] = useState([])
  const [listPlaylists, setListPlaylists] = useState([])

  return (
    <>
    <div className={styles.container}>
      <HeadMusic setOpenAdd={setOpenAdd} setOpenLibrary={setOpenLibrary} />
      {
        openAdd ? <Add setListMusic={setListMusic} listPlaylists={listPlaylists}
        setListPlaylists={setListPlaylists}
        /> :
        openLibrary ? <Library listMusic={listMusic} setListMusic={setListMusic}
        listPlaylists={listPlaylists} setListPlaylists={setListPlaylists}
        />
        : null
      }
    </div>
    <Navigation />
    </>
  )
}