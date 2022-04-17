import React from 'react';
import PhonebookItem from '../PhonebookItem/PhonebookItem.js';
import s from './PhonebookList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../redux/phonebook-reducer';

const PhonebookList = ({ visibleContacts, deleteContact }) => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <ul className={s.list}>
      {getVisibleContacts().map(contact => (
        <PhonebookItem
          key={contact.id}
          contact={contact}
          deleteContact={contactId => dispatch(deleteItem(contactId))}
        />
      ))}
    </ul>
  );
};

export default PhonebookList;
