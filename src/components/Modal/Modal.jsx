import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImageURL, tags }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <Overlay>
      <ModalDiv>
        <img src={largeImageURL} alt={tags} />
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
};

//////
//Class version
/////
// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       console.log(event.target, event.currentTarget);
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <Overlay>
//         <ModalDiv>{this.props.children}</ModalDiv>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }
