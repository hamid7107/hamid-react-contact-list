import React, { useState } from "react";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import SearchContact from "./components/SearchContact";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [search, setSearch] = useState("");

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: uuidv4() }]);
    setShowAddModal(false);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setShowEditModal(false);
  };

  const editHandler = (contact) => {
    setEditContact(contact);
    setShowEditModal(true);
  };
  const searchHandeler = () => {
    if (search) {
      console.log(search);
      console.log(contacts);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="container d-flex justify-content-between align-items-center my-3">
          <h1 className="text-left mt-1 mb-0">Contacts Manager</h1>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            Add Contact
          </button>
        </div>
        <SearchContact
          search={search}
          setSearch={setSearch}
          searchHandeler={searchHandeler}
        />
        <ContactList
          contacts={contacts}
          onDelete={deleteContact}
          onEdit={editHandler}
        />
        {showAddModal && (
          <AddContact
            onAdd={addContact}
            onClose={() => setShowAddModal(false)}
          />
        )}
        {showEditModal && (
          <EditContact
            contact={editContact}
            onUpdate={updateContact}
            onClose={() => setShowEditModal(false)}
          />
        )}
      </div>
      <footer className="container text-center mt-5">
        <p>Made with ❤ in BotoStart Bootcamp</p>
      </footer>
    </>
  );
};

export default App;
