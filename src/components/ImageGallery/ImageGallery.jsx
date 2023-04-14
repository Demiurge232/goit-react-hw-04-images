import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryUl } from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  return (
    <ImageGalleryUl>
      {images?.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ImageGalleryUl>
  );
}

ImageGallery.propTypes = {
  nameSearchImage: PropTypes.string,
};

///////
///CLASS VERSION
///////
// export default class ImageGallery extends Component {
//   state = {
//     images: null,
//     loading: false,
//     totalHits: null,
//     page: 1,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.nameSearchImage !== this.props.nameSearchImage) {
//       this.setState({ loading: true, images: null, page: 1, totalHits: null });

//       getImages(this.props.nameSearchImage, this.state.page)
//         .then(result =>
//           this.setState({
//             images: result.data.hits,
//             totalHits: result.data.totalHits,
//           })
//         )
//         .catch(error => console.log(error.message))
//         .finally(() => this.setState({ loading: false }));
//     }

//     if (
//       prevState.page !== this.state.page &&
//       prevProps.nameSearchImage === this.props.nameSearchImage
//     ) {
//       this.setState({ loading: true });
//       getImages(this.props.nameSearchImage, this.state.page)
//         .then(result =>
//           this.setState(prevState => ({
//             images: [...prevState.images, ...result.data.hits],
//           }))
//         )
//         .catch(error => console.log(error.message))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   handleIncrementPage = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { images, loading, totalHits } = this.state;
//     return (
//       <>
//         <ImageGalleryUl>
//           {images &&
//             images.map(({ id, webformatURL, largeImageURL, tags }) => (
//               <ImageGalleryItem
//                 key={id}
//                 webformatURL={webformatURL}
//                 largeImageURL={largeImageURL}
//                 tags={tags}
//               />
//             ))}
//         </ImageGalleryUl>

//         {loading && <Loader />}

//         {totalHits > 12 && <Button onClick={this.handleIncrementPage} />}
//       </>
//     );
//   }
// }
