import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
   const { character } = props; 
return (
  <div>
      <Card>
    <Image src={character.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{character.name}</Card.Header>
      <Card.Meta>
        <span className='status'>{character.status}</span>
        <span className='species'>{character.species}</span>
      </Card.Meta>
      <Card.Description>
        {character.origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes : {character.episode.length}
      </a>
    </Card.Content>
  </Card>

  </div>
);
}
