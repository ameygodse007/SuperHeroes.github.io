import React from 'react';
import {Row , Col , ProgressBar} from 'react-bootstrap';

function CharacterCard(characterInfo) {
  console.log(characterInfo);
  const powers =Object.keys(characterInfo.characterInfo.powerstats);
  const pows = Object.values(characterInfo.characterInfo.powerstats);
  return (
    <Row className="justify-content-md-center">
      <Col className="abc">
        <h1>Character</h1>
        <img src={characterInfo.characterInfo.image.url} alt="profile" />
      </Col>
      <Col>
        <h1>Name: {characterInfo.characterInfo.biography['full-name']}</h1>
        <h1>WORK: {characterInfo.characterInfo.work['occupation']}</h1>
        {powers.map(power=>(<div style={{padding:10}}>
          <h3>{power}</h3>
          <ProgressBar now={characterInfo.characterInfo.powerstats[power]} label={`${characterInfo.characterInfo.powerstats[power]}`}/>
        </div>))}
      </Col>
    </Row>
  );
}

export default CharacterCard;