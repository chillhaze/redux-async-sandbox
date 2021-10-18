import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { ContactItem } from './ContactItem';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { getContacts, getFiltered } from 'redux/contacts/contacts-selectors';

import * as contactsOperations from 'redux/contacts/contacts-operations';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFiltered);
  const dispatch = useDispatch();

  console.log(contacts);

  //запускаю fetch через useEffect
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  //короткая запись, лучше по одному вытягивать значения
  // const { contacts, filtered } = useSelector(state => state.phonebook);

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filtered.toLowerCase()),
  );

  return (
    <div className={css.container}>
      <ul className={css.contactsList}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteBtnPush={() => dispatch(deleteContact(id))}
            />
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteBtnPush: PropTypes.func,
};

// const mapStateToProps = state => {
//   const { contacts, filtered } = state.phonebook;

//   const filteredContacts = contacts.filter(item =>
//     item.name.toLowerCase().includes(filtered.toLowerCase()),
//   );
//   return {
//     contacts: filteredContacts,
//     filtered: state.filtered,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteContact: id => dispatch(deleteContact(id)),
//   };
// };
//на хуках удаляю connect, mapStateToProps,mapDispatchToProps - использую useSelector, useDispatch
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
export default ContactList;
