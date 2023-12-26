// import { Container, Block, Title, StyledLink } from './SecondPage.styled';

import { useDispatch, useSelector } from 'react-redux';
// import { ContactForm } from '../../components/ContactForm/ContactForm';
// import { ContactList } from '../../components/ContactList/ContactList';
import { getError, getIsLoading } from '../../redux/contacts/contactsSlice';
import { useEffect } from 'react';
// import { fetchContacts } from '../../redux/contacts/operations';
import Calories from '../../components/CaloriesGraph/CaloriesGraph';
import { fetchCalories } from '../../redux/calories/operations';

const SecondPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // useEffect(() => {
  //   const fetchPhoneBook = async () => {
  //     try {
  //       dispatch(fetchContacts());
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchPhoneBook();
  // }, [dispatch]);

  useEffect(() => {
    const fetchCaloriesData = async () => {
      try {
        dispatch(fetchCalories());
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCaloriesData();
  }, [dispatch]);
  return (
    <div>
      {/* <ContactForm /> */}
      {isLoading && !error && <b>Request in progress...</b>}
      <Calories />

      {/* <ContactList /> */}
    </div>
  );
};

export default SecondPage;
