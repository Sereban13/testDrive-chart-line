import { ContactCard } from 'components/ContactCard.jsx/ContactCard';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  getContacts,
  getError,
  getIsLoading,
} from '../../redux/contacts/contactsSlice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  console.log(contacts);

  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}

      {!contacts ? (
        <p>you do not have any contact</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <ContactCard contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
