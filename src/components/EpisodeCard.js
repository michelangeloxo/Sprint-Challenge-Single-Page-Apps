import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function EpisodeCard( props ) {
  const { episode } = props; 

  return (
    
        <Card>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Meta>
          <span className='dimension'>{episode.air_date}</span>
          <br></br>
          <span className='dimension'>{episode.episode}</span>
          <br></br>
          <span className='dimension'>{episode.url}</span>
        </Card.Meta>
 
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {/* Episodes : {episode.count.length} */}
        </a>
      </Card.Content>
    </Card>
  
    
  );
  }
