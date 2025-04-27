import { useState } from "react";
import PlusSign from "./assets/Group 2.svg";
import Share from "./assets/Group 3.svg";
import BlueBox from "./assets/Rectangle 3.svg";
import EyeOpen from "/eye-open-svgrepo-com.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// import './App.css'

function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar w/ text
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
                <a className="nav-link" href="#">
                  Sign Out
                </a>
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

function Hero() {
  return (
    <div className="container">
      <div className="container text-center">
        <div className="row">
          <div className="col-9 bg-light text-start">
            <h1 className="display-1">Good Morning, Chelsea</h1>
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

function ViewDashboard() {
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
                <h3 className="h3 text-start ">100899</h3>
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
                        <h3 className="h3 text-start">Rp. 10.000.000,00</h3>
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
  return(
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
            <td>{transactionLists.dateTime}</td>
            <td>{transactionLists.type}</td>
            <td>{transactionLists.fromTo}</td>
            <td>{transactionLists.description}</td>
            <td>{transactionLists.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

function App() {
  const [count, setCount] = useState(0);

  const [transactionList, setTransactionList] = useState([
    {
      id: 1,
      dateTime: "20:10 - 30 June 2022",
      type: "Transfer",
      fromTo: "Sendy",
      description: "Fore Coffee",
      amount: "-75000",
    },
    {
      id: 2,
      dateTime: "19:52 - 29 June 2022",
      type: "Pay",
      fromTo: "Wallaby",
      description: "",
      amount: "+205000",
    },
    {
      id: 3,
      dateTime: "14:30 - 28 June 2022",
      type: "Transfer",
      fromTo: "Gojek",
      description: "Food Delivery",
      amount: "-50000",
    },
    {
      id: 4,
      dateTime: "18:15 - 27 June 2022",
      type: "Pay",
      fromTo: "Shopee",
      description: "Shoes Purchase",
      amount: "-350000",
    },
    {
      id: 5,
      dateTime: "09:20 - 27 June 2022",
      type: "Top Up",
      fromTo: "Bank Transfer",
      description: "Monthly Allowance",
      amount: "+1000000",
    },
    {
      id: 6,
      dateTime: "21:45 - 26 June 2022",
      type: "Transfer",
      fromTo: "Grab",
      description: "Ride Payment",
      amount: "-80000",
    },
    {
      id: 7,
      dateTime: "16:00 - 25 June 2022",
      type: "Pay",
      fromTo: "Tokopedia",
      description: "Gadget Accessory",
      amount: "-150000",
    },
  ]);

  return (
    <>
      <Header />
      <Hero />
      <ViewDashboard />
      <TransactionTable list={transactionList} />
    </>
  );
}

export default App;
