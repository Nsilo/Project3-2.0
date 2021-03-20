import React, { useState, useContext, useEffect } from "react";
import PostContainer from "../components/PostContainer";
import UserContext from "../context/userContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./pages.css";

const Profile = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!userData.user) history.push("/login");
    getEvents();
  }, [userData.user, history]);

  const getEvents = async () => {
    const clientId=process.env.REACT_APP_CLIENTID;
    const apiKey=process.env.REACT_APP_APIKEY;

    try {
      const response = await axios.get(
        `https://api.seatgeek.com/2/events?taxonomies.name=concert&geoip=true&client_id=${clientId}&client_secret=${apiKey}`
      );
      const concert = response.data.events;
      setEvents(concert);
      console.log("response:", concert);
    } catch (error) {
      console.log(error);
    }
  };

  // const deleteProfile = async () => {
  //   try {
  //     await axios.delete("/user", {
  //       headers: { "x-auth-token": localStorage.getItem("auth-token") },
  //     });
  //     history.push("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="grid-container">
      <div className="profileHeader">
        <h1>
          {userData.user?.firstName} {userData.user?.lastName}
        </h1>
      </div>
      <div className="aboutMe">
        <h2>AboutMe</h2>
      </div>
      <div className="postContainer">
        <PostContainer />
      </div>
      <div className="allPost">
        <h2>Upcoming Events Near You</h2>
        {events.map((item, index) => (
          <div key={index}>
            <p> {item.title} 
            <img src={item.performers[0].image}></img>
            <a href={item.url}>Tickets</a> {item.venue.name} {item.venue.address} {item.venue.display_location}
            </p> 
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
