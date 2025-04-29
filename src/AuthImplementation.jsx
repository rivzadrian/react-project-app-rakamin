import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import './assets/authimplementation.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const result = await login(username, password);
    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Contoh Dashboard
const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch
  useState(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('http://localhost:3000/user');
        const userData = await userResponse.json();
        
        const transactionsResponse = await fetch(
          'http://localhost:3000/transactions?_sort=date&_order=desc&_limit=5'
        );
        const transactionsData = await transactionsResponse.json();
        
        setUserData(userData);
        setTransactions(transactionsData);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Welcome, {currentUser.name}</h1>
        <button onClick={logout}>Logout</button>
      </div>
      
      {userData && (
        <div className="account-info">
          <h2>Account Details</h2>
          <p>Account Number: {userData.accountNumber}</p>
          <p>Balance: {userData.currency} {userData.balance.toLocaleString()}</p>
        </div>
      )}
      
      <div className="recent-transactions">
        <h2>Recent Transactions</h2>
        {transactions.length > 0 ? (
          <ul>
            {transactions.map(transaction => (
              <li key={transaction.id}>
                <span>{transaction.description}</span>
                <span className={transaction.amount < 0 ? 'negative' : 'positive'}>
                  {transaction.amount < 0 ? '-' : '+'} 
                  {userData?.currency} {Math.abs(transaction.amount).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent transactions</p>
        )}
      </div>
    </div>
  );
};

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <Dashboard /> : <LoginForm />;
};

const App = () => {
  return (
    <AuthProvider>
      <div className="app-container">
        <AppContent />
      </div>
    </AuthProvider>
  );
};

export default App;