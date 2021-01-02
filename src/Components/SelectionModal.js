import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SelectionModal = ({ show, setshow, setcharacterInfo, characterList }) => {
  const [selectedItem, setSelectedItem] = useState();

  const handleChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let chosenOne = characterList.find((item) => item.id === selectedItem);
    setcharacterInfo(chosenOne);
    setshow(false);
  };

  return (
    <Modal className="my-moodal" show={show}>
      <Modal.Header>
        <Modal.Title>Which one?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="myForm"  onSubmit={handleSubmit}>
          {characterList
            ? characterList.map((character) => {
                return (
                  <Form.Check
                    type='radio'
                    value={character.id}
                    checked={selectedItem === character.id}
                    label={`${character.biography['full-name']}`}
                    onChange={handleChange}
                    key={character.id}
                  />
                );
              })
            : null}
          <Button type='submit'>Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SelectionModal;
