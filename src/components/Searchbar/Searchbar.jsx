import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const handleSearchRequest = event => {
    event.preventDefault();
    const { searchRequest } = event.target.elements;

    if (searchRequest.value.trim() === '') {
      toast.warn('The request field is empty, write something');
      return;
    }

    onSubmit(searchRequest.value);
    searchRequest.value = '';
  };

  return (
    <>
      <SearchbarHeader>
        <SearchForm onSubmit={handleSearchRequest}>
          <SearchFormButton type="submit">
            <BsSearch />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name="searchRequest"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>

      <ToastContainer />
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

/////
// CLASS VERSION
/////
// export default class Searchbar extends Component {
//   handleSearchRequest = event => {
//     event.preventDefault();
//     const { searchRequest } = event.target.elements;

//     if (searchRequest.value.trim() === '') {
//       return;
//     }

//     this.props.onSubmit(searchRequest.value);
//     searchRequest.value = '';
//   };

//   render() {
//     return (
//       <SearchbarHeader>
//         <SearchForm onSubmit={this.handleSearchRequest}>
//           <SearchFormButton type="submit">
//             <BsSearch />
//             <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//           </SearchFormButton>

//           <SearchFormInput
//             name="searchRequest"
//             type="text"
//             autocomplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </SearchbarHeader>
//     );
//   }
// }
