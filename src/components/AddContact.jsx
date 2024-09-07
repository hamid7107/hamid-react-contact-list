import React, { useState } from "react";
import Modal from "./Modal";

const AddContact = ({ onAdd, onClose }) => {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, family, phone, email, gender });
    setName("");
    setFamily("");
    setPhone("");
    setEmail("");
    setGender("");
    onClose();
  };

  return (
    <Modal title="Add Contact" onClose={onClose}>
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
            <option selected>Please Select</option>
            <option value="male">Male</option>
            <option value="female">Femele</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
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
            placeholder="Last Name"
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
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-plus"></i> Add
        </button>
      </form>
    </Modal>
  );
};

export default AddContact;
