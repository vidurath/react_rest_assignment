const User = (props) => {
  let { chosenUsers } = props;
  return (
    <div>
      {chosenUsers.map((item) => (
        <div className="col-sm-4 offset-sm-3">
          <img
            alt="avatar"
            src={`https://reqres.in/img/faces/${item.id}-image.jpg`}
          />
          <div>
            <h2>{item.first_name}</h2>
            <h2>{item.last_name}</h2>
            <p>{item.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
