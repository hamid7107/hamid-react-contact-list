import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const EditContact = ({ contact, onUpdate, onClose }) => {
  const [name, setName] = useState(contact.name);
  const [family, setFamily] = useState(contact.family);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);
  const [gender, setGender] = useState(contact.gender);

  useEffect(() => {
    setName(contact.name);
    setFamily(contact.family);
    setPhone(contact.phone);
    setEmail(contact.email);
    setGender(contact.gender);
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...contact, name, family, phone, email, gender });
    onClose();
  };

  return (
    <Modal title="Edit Contact" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            aria-label="Default"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="male">Mele</option>
            <option value="female">Femele</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Family</label>
          <input
            type="text"
            className="form-control"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success me-2">
          <i className="fas fa-save"></i> Update
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default EditContact;
