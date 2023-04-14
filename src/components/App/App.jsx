import { useState, useEffect } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import getImages from 'services/getImages';
import { AppDiv } from './App.styled';

export default function App() {
  const [nameSearchImage, setNameSearchImage] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(null);
  const [page, setPage] = useState(1);

  const handleFormSubmitOptions = searchRequest => {
    setNameSearchImage(searchRequest);
    setPage(1);
    setImages([]);
    setTotalHits(null);
  };

  useEffect(() => {
    if (nameSearchImage === '') {
      return;
    }

    setLoading(true);
    getImages(nameSearchImage, page)
      .then(result => {
        setImages(prevImages => [...prevImages, ...result.data.hits]);
        setTotalHits(result.data.totalHits);
      })
      .catch(error => console.log(error.message))
      .finally(() => setLoading(false));
  }, [nameSearchImage, page]);

  const handleIncrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppDiv>
      <Searchbar onSubmit={handleFormSubmitOptions} />
      <ImageGallery nameSearchImage={nameSearchImage} images={images} />

      {loading && <Loader />}

      {totalHits > 12 && <Button onClick={handleIncrementPage} />}
    </AppDiv>
  );
}

/////
// CLASS VERSION
/////
// export default class App extends Component {
//   state = {
//     nameSearchImage: '',
//   };

//   handleFormSubmit = nameSearchImage => {
//     this.setState({ nameSearchImage });
//   };

//   render() {
//     const { nameSearchImage } = this.state;
//     return (
//       <AppDiv>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery nameSearchImage={nameSearchImage} />
//       </AppDiv>
//     );
//   }
// }
