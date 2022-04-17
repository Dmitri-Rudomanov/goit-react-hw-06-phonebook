import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Filter from 'components/Filter/Filter';
import PhonebookList from 'components/PhonebookList/PhonebookList';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <PhonebookList />
    </div>
  );
}
