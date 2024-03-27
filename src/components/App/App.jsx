import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.value);

  const filteredContacts = contacts.filter((el) =>
    el.name.toLowerCase().includes(selectNameFilter)
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={filteredContacts} />
      </div>
    </>
  );
}

export default App;
