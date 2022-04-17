import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/phonebook-reducer';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label>
      Фильтр по имени
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};
export default Filter;
