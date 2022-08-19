import React, { useState, useEffect } from "react";
import axios from "axios";
import picture from "../images/profile.JPG";
import "./Profile.css";

/*"profile": 
    "nickname": "맹구",
    "introduction": "나는 아무 생각이 없는 돌맹이다.",
    "image"*/
const Profile = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get("https://www.orangeapi.ga/users/profile/3/").then((response) => {
        setUsers(response.data);
      });
    }, []);

  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.orangeapi.ga/users/16/follower/")
      .then((response) => {
        setFollowers(response.data);
      });
  }, []);

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://www.orangeapi.ga/inner/likes/").then((response) => {
      setFollowers(response.data);
    });
  }, []);

  return (
    <div>
      <div className="User">
        <div className="Follow">
          <div className="Following">Following : 30</div>
          <div className="Follower">Follower : 30</div>
          <div className="FollowUser">
            <li className="FollowUserPhoto">
              <img src={
                  "https://www.orangeapi.ga/media/profile/%E1%84%8E%E1%85%A5%E1%86%AF%E1%84%89%E1%85%AE.png"
                }
              />
            </li>
            <li className="FollowUserPhoto">
              <img
                src={
                  "https://www.orangeapi.ga/media/profile/%E1%84%8E%E1%85%A5%E1%86%AF%E1%84%89%E1%85%AE.png"
                }
              />
            </li>
            <li className="FollowUserPhoto">
              <img
                src={
                  "https://www.orangeapi.ga/media/profile/%E1%84%8E%E1%85%A5%E1%86%AF%E1%84%89%E1%85%AE.png"
                }
              />
            </li>
          </div>
        </div>
        <div className="UserInfo">
          <div className="UserID">{users.nickname}</div>
          {/* <div className="UserJob">AI Developer</div> */}
          <div className="UserJob">{users.introduction}</div>
          {/* 메모 버튼 추가 */}
        </div>
        <div className="ProfilePicture">
          <img src="http://www.orangeapi.ga/media/profile/%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%80%E1%85%AE.png" />
        </div>
      </div>
      <div className="PhotoList">
        {/* {photos.map(data => (
                    <li className="PhotoBox" key={photos.pk}>
                        
                    </li>
                ))} */}
        <li className="PhotoBox">
          <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzEwMTZfMTI2/MDAxNTA4MTE4NzAxNzY0.TkpnYTPSBWpIR0120hY6uczvtYWa0LWnKDQfcW696xsg.gjp1VuoD2Hfcp7PuAZ9Bg7cyxnbIMoo5bmvTKx9ND9kg.JPEG.jinmichu/IMG_1920.jpg?type=w800" />

        </li>
        <li className="PhotoBox">
          <img src="data:image/jpeg;base64,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" />
        </li>
        <li className="PhotoBox">3</li>
        <li className="PhotoBox">4</li>
        <li className="PhotoBox">5</li>
        <li className="PhotoBox">6</li>
        {/* 그리드로 사진 넣기? */}
        {/* {datas.map(data => (
                    <li key={data.pk}>
                        <img className="PhotoBox" src={data.image} />
                    </li>
                ))} */}
      </div>
    </div>
  );
};

export default Profile;
