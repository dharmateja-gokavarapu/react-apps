const UserCard = ({ users }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={users.image} alt="userPic" />
      </div>
      <div className="user-data">
        <h4>
          Full Name : {users.firstName} {users.lastName}
        </h4>
        <h4>Age : {users.age}</h4>
        <h4>Email: {users.email}</h4>
        <h4>Phome Number: {users.phone}</h4>
      </div>
    </div>
  );
};

export default UserCard;
