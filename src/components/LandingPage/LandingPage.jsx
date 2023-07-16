import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Axios from "axios";

const LandingPage = () => {
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const url = "https://panorbit.in/api/users.json";
      const res = await Axios.get(url);
      setUserArray(res.data.users);
      console.log(userArray);
    };
    getUsers();
  }, []);

  return (
    <div className="page-cont">
      <div className="user-list-cont">
        <div className="list-header">Select an account</div>
          <div className="list-body">
            {userArray.map((user, idx) => (
              
                <Link className="list-item" key={idx} to={`profile/${user.username}`}>
                  <div className="item-img">
                    <img src={user.profilepicture} alt="profile-pic" />
                  </div>
                  <div>{user.name}</div>
                </Link>
              ))}
          </div>
      </div>
    </div>
  );
};

export default LandingPage;
