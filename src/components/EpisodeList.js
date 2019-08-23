import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {

    const [episode, setEpisode] = useState()
    useEffect(() => {   
       
        axios
          .get('https://rickandmortyapi.com/api/episode/')
          .then(response => {
            setEpisode(response.data.results);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      

    }, []);
  if(!episode){ return null; }
    return (
      <section className="episode-list grid-view">
        {episode.map(episode1 => (
          <EpisodeCard key={episode1.id} episode={episode1} />
        ))}
      </section>
    );
  }