function SearchContact({ search, setSearch, searchHandeler }) {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center my-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={search}
            placeholder="Search Contacts"
            aria-label="Search Contacts"
            aria-describedby="button-addon2"
            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={searchHandeler}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchContact;
