import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0.95)',
  width: '80%',
  height: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  transition: 'transform 0.3s ease-in-out',
};

export default function KeepMountedModal({
  open,
  handleClose,
  header,
  text,
  additionalImg,
}) {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={style}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            className="boxi"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              overflow: 'auto',
              scrollbarColor: '#FFBE56 #FFECB8',
              width: '100%',
              paddingRight: '8px',
            }}
          >
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              <p className="Jura" style={{fontSize: '28px'}}>
                {header}
              </p>
            </Typography>
            <div
              className="modal__description"
              style={{
                overflow: 'hidden',
                width: '100%',
              }}
            >
              <img
                src={`/assets/${additionalImg}`}
                alt=""
                style={{
                  float: 'left',
                  marginRight: '16px',
                  marginBottom: '8px',
                  maxHeight: '360px',
                  width: 'auto',
                }}
              />
              <div
                className="Jura"
                style={{
                  fontSize: '24px',
                  lineHeight: 1.5,
                }}
              >
                {text}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
