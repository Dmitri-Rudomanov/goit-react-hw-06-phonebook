import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Filter from 'components/Filter/Filter';
import PhonebookList from 'components/PhonebookList/PhonebookList';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, changeFilter } from '../redux/phonebook-reducer';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm />
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
