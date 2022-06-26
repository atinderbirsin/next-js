function Users({ users }) {
  return (
    <>
      <h1>Users page list</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}

export default Users;
