import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { StyleModal } from './styles';
import { New } from '../New';

export const SimpleModal = ({ value }) => {
  const imgSrc = value?.multimedia
    ? value?.multimedia[value?.multimedia.length - 1].url
    : null;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const openNew = () => {
    window.open(value?.url, '_blank');
  };

  const body = (
    <StyleModal elevation={3} variant={'outlined'} onClick={openNew}>
      <h2 id="simple-modal-title">{value?.title}</h2>
      {imgSrc ? <img src={imgSrc} /> : <></>}
      <p id="simple-modal-description">{value?.abstract}</p>
    </StyleModal>
  );

  return (
    <div>
      <New onclick={() => handleOpen()} value={value} />
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
