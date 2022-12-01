import React from 'react'
import Button from 'react-bootstrap/Button';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Card from 'react-bootstrap/Card';
import TearDrop from '../../data/teardrop.json'

const SongCard = () => {
  return (
    TearDrop && TearDrop.map(teardrop => {
      return (
        <Card className='' style={{ width: '18rem' }} key={teardrop.id}>
          <Card.Img variant="top" src={`images/${teardrop.src}`} />
          <Card.Body>
            <Card.Title className='text-center fw-bold text-uppercase'>{teardrop.title}</Card.Title>
            <AudioPlayer
              autoPlay
              src="https://www.dropbox.com/home/Album%20Teardrop?preview=INVISIBLE+1.mp3"
              onPlay={e => console.log("onPlay")}
            // other props here
            />
            <Button variant="primary justify-center">Go somewhere</Button>
          </Card.Body>
        </Card>

      )
    })
  )
}

export default SongCard