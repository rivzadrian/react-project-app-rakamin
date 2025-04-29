import axios from "axios";

const GetProfile = async () => {
  const url = "http://localhost:3000/user";
  try {
    const response = await axios.get(url);
    const userData = response.data;
    // console.log(`Dari GET ${userData}`);
    return userData;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
};

const GetTransaction = async () => {
  const url = "http://localhost:3000/transactions";
  try {
    const response = await axios.get(url);
    const userTransaction = response.data;
    console.log(`Dari GET ${userTransaction}`);
    return userTransaction;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
};

export default { GetProfile, GetTransaction };
