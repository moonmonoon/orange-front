import React, { Component } from "react";
import styled from "styled-components";
import picture from '../images/profile.JPG'
import './Profile.css'

const Profile = (props) => {
    return (
        <div>
            <div className="User">
                <div className="Follow">
                    <div className="Following">Following : 50</div>
                    <div className="Follower">Follower : 30</div>
                </div>
                <div className="UserInfo">
                    <div className="UserID">Moon</div>
                    <div className="UserJob">AI Developer</div>
                </div>
                <div className="ProfilePicture">
                    <img src={picture}/>
                </div>
            </div>
            <div className="PhotoList">
                {/* 그리드로 사진 넣기? */}
            </div>
        </div>
    );
}

export default Profile;

