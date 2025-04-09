import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0.95)',
  width: "80%",
  height: "70%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  transition: "transform 0.3s ease-in-out",
};


export default function KeepMountedModal({open, handleClose, header, text, additionalImg}) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <div >
      {/* <button onClick={handelOpen()}>Open modal</button> */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
          <div className='boxi' style = {{display:"flex", flexDirection:"column", alignItems:"flex-start", overflow: 'auto', scrollbarColor: '#FFBE56 #FFECB8'}}>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2" >
                <p className='Jura'>{header}</p>
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }} style={{}}>
                <p className='Jura' style={{}}>
                  {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text}
                </p>
            </Typography>
            <img src={`/assets/${additionalImg}`} alt="" style={{maxHeight:"360px", alignSelf: 'center'}}/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}