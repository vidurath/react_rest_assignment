const UserSearch = (props) => {
  let { search_user, handleChange } = props;

  return (
    <div className="search-bar">
      <label className="search-text">Search: </label>
      <input
        id="search"
        type="search"
        value={search_user}
        onChange={handleChange}
      />
    </div>
  );
};

export default UserSearch;
