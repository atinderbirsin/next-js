function User({user}) {
  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </>
  );
}

export default User;
