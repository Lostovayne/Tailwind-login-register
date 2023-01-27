import { useAuth } from '../context/authContext';

const Home = () => {
  const { user, logout } = useAuth();

  const handleClick = async () => {
    await logout();
  };

  return (
    <div>
      <p>Welcome {user.email}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Home;
