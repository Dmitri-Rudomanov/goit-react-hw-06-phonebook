import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Filter from 'components/Filter/Filter';
import PhonebookList from 'components/PhonebookList/PhonebookList';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteItem,
  changeFilter,
} from '../redux/phonebook-reducer';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const addNewContact = items => {
    const searchContact = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(items.name.toLowerCase());

    if (searchContact) {
      alert(`${items.name} is already in conacts`);
    } else {
      return dispatch(addContact({ id: shortid.generate(), ...items }));
    }
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm onAddContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
      <PhonebookList
        visibleContacts={getVisibleContacts()}
        deleteContact={contactId => dispatch(deleteItem(contactId))}
      />
    </div>
  );
}
