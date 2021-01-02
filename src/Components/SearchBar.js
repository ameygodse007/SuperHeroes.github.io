import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row , Button, Form , Spinner} from 'react-bootstrap';

function SearchBar({error,isloading, seterror , getcharacter}) {

  const [input,setinput] = useState('');
  
  function hc(e) {
    seterror(null);
    setinput(e.target.value);
  }

  
  
  const hs=(e)=>{
    e.preventDefault();
    getcharacter(input);
    setinput('');
  }
  return (
    <Row className="justify-content-md-center">
      <Form onSubmit={hs}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search for a superhero or super villian</Form.Label>
          <Form.Control  placeholder="e.g. SuperMan" valur={input} onChange={hc} />
          {error ?<Form.Text  className="text-muted">
            {error}
          </Form.Text> :null}
        </Form.Group>
        {isloading ?<Button type="submit"><Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="sr-only">Loading...</span></Button>: <Button type="submit">Get Character</Button>}
      </Form>
    </Row>
  );
}

export default SearchBar;