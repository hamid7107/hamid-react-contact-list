const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Contact List</h2>
      <ul className="list-group">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <i className={`fas fa-${contact.gender} me-2`}></i>
              <strong>
                {contact.name} {contact.family}
              </strong>
              <div className="text-muted">
                <i className="fas fa-phone-alt me-2"></i>
                {contact.phone}
              </div>
              <div className="text-muted">
                <i className="fas fa-envelope me-2"></i>
                {contact.email}
              </div>
            </div>
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(contact)}
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(contact.id)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
