import { useEffect, useState } from "react";
import PlusSign from "./assets/Group 2.svg";
import Share from "./assets/Group 3.svg";
import BlueBox from "./assets/Rectangle 3.svg";
import EyeOpen from "/eye-open-svgrepo-com.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

//     "user": {
//   "name": "Chelsea Immanuela",
//   "accountNumber": "100899",
//   "balance": 10000000.00,
//   "currency": "Rp"
// },

import GetService from "./services/Get.jsx";
import { AuthProvider, useAuth } from './context/AuthContext';

// import './App.css'

function Header() {
  const [error, setError] = useState('');
  const { logout } = useAuth();
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
  
      const result = await logout();
      console.log("ini logout result 1");
      if (!result.success) {
        setError(result.message);
      }
      console.log("ini logout result 2", result);
      
    };
  
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Waleeeeeddddd
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Transfer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TopUp
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="#" onClick={handleSubmit}>
                  Sign Out
                </button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Matahari
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Hero({ profiles }) {
  return (
    <div className="container">
      <div className="container text-center">
        <div className="row">
          <div className="col-9 bg-light text-start">
            <h1 className="display-1">Good Morning, {profiles.name}</h1>
            <h4 className="h4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              cumque nobis ut vel?{" "}
            </h4>
          </div>
          <div className="col  bg-light d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I"
                className="rounded-circle me-3"
                alt="profile"
                width="60"
                height="60"
              />
              <div className="text-start">
                <h5 className="h5 m-0">Chelsea FC</h5>
                <p className="m-0">Personal Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViewDashboard({ profiles }) {
  return (
    <div className="container">
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <div
              className="card rounded-4 bg-primary text-light"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="card-body d-flex flex-column justify-content-center align-items-start ps-5">
                <h5 className=" h5 text-light text-start ">Account No.</h5>
                <h3 className="h3 text-start ">{profiles.accountNumber}</h3>
              </div>
            </div>
          </div>
          <div className="col bg-light">
            <div
              className="card rounded-4"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-9 position-relative">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="h6 card-subtitle mb-2 text-body-secondary text-start">
                          Balance
                        </h6>
                        <h3 className="h3 text-start">
                          {profiles.currency}. {profiles.balance}
                        </h3>
                      </div>

                      {/* Eye Open Button */}
                      <button
                        onClick={() => alert("Plus clicked!")}
                        className="border-0 bg-transparent p-0"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <img
                          src={EyeOpen}
                          alt="Eye Open"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center align-items-center">
                    <div
                      className="position-relative"
                      style={{ width: "40px", height: "40px" }}
                    >
                      {/* Blue Box */}
                      <button
                        onClick={() => alert("Plus clicked!")}
                        className="position-absolute top-50 start-50 translate-middle border-0 bg-transparent p-0"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <img
                          src={BlueBox}
                          alt="BlueBox"
                          className="position-absolute top-50 start-50 translate-middle"
                          style={{ width: "45px", height: "45px" }}
                        />
                        {/* Plus Sign */}
                        <img
                          src={PlusSign}
                          alt="Plus"
                          className="position-absolute top-50 start-50 translate-middle"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </button>
                    </div>
                    <div
                      className="position-relative"
                      style={{ width: "40px", height: "40px" }}
                    >
                      {/* Blue Box */}
                      <button
                        onClick={() => alert("Plus clicked!")}
                        className="position-absolute top-50 start-50 translate-middle border-0 bg-transparent p-0"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <img
                          src={BlueBox}
                          alt="BlueBox"
                          className="position-absolute top-50 start-50 translate-middle"
                          style={{ width: "45px", height: "45px" }}
                        />
                        {/* Plus Sign */}
                        <img
                          src={Share}
                          alt="Share"
                          className="position-absolute top-50 start-50 translate-middle"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransactionTable({ list }) {
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Date/Time</th>
            <th scope="col">Type</th>
            <th scope="col">From/To</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((transactionLists) => (
            <tr>
              {/* <th scope="row">{transactionLists.id}</th> */}
              <td>{transactionLists.date}</td>
              <td>{transactionLists.type}</td>
              <td>{transactionLists.from}</td>
              <td>{transactionLists.description}</td>
              <td>{transactionLists.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [profile, setProfile] = useState([]);
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let userData = await GetService.GetProfile();
        setProfile(userData);
      } catch (error) {
        console.log("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        let userTrans = await GetService.GetTransaction();
        setTransactionList(userTrans);
      } catch (error) {
        console.log("Error fetching transaction:", error);
      }
    };
    fetchTransaction();
  }, []);

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

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <>
      <Header />
      <Hero profiles={profile} />
      <ViewDashboard profiles={profile} />
      <div className="container py-4">
        <div className="row g-2 align-items-center">
          <div className="col-md-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="col-md-2"></div>

          <div className="col-md-2">
            <label className="form-label me-2">Show</label>
            <select className="form-select">
              <option>Last 10 transactions</option>
              <option>Last 20 transactions</option>
              <option>All transactions</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">Sort by</label>
            <select className="form-select">
              <option>Date</option>
              <option>Amount</option>
            </select>
          </div>

          <div className="col-md-2">
            <label className="form-label d-none d-md-block">&nbsp;</label>
            <select className="form-select">
              <option>Descending</option>
              <option>Ascending</option>
            </select>
          </div>
        </div>
      </div>
      <TransactionTable list={transactionList} />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
