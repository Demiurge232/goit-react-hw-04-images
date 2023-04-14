import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  webformatURL,
  tags,
  largeImageURL,
}) {
  const [showModal, setShowModal] = useState(false);

  const openImages = event => {
    if (event.target !== event.currentTarget) {
      toggleModal();
    }
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <ImageGalleryItemLi onClick={openImages}>
      <ImageGalleryItemImage src={webformatURL} alt={tags} />
      {showModal && (
        <Modal
          onClose={toggleModal}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      )}
    </ImageGalleryItemLi>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};

/////
//Class version
/////
// export default class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   openImages = event => {
//     if (event.target !== event.currentTarget) {
//       this.toggleModal();
//     }
//   };

//   toggleModal = () => {
//     this.setState(prevState => ({
//       showModal: !prevState.showModal,
//     }));
//   };

//   render() {
//     const { showModal } = this.state;
//     const { webformatURL, largeImageURL, tags } = this.props;

//     return (
//       <ImageGalleryItemLi onClick={this.openImages}>
//         <ImageGalleryItemImage src={webformatURL} alt={tags} />
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={largeImageURL} alt={tags} />
//           </Modal>
//         )}
//       </ImageGalleryItemLi>
//     );
//   }
// }
