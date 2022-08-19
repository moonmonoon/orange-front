import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import picture from '../images/profile.JPG'
import './Profile.css'

/*"profile": 
    "nickname": "맹구",
    "introduction": "나는 아무 생각이 없는 돌맹이다.",
    "image"*/
const Profile = (props) => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios.get("https://www.orangeapi.ga/inner/likes/7/")
            .then(response => {
                setDatas(response.data);
            });
    }, []);

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
                    {/* <div className="UserJob">
                        {datas.map(data =>{
                        return (<div key={data.pk}>
                            {data.profile.nickname}
                            </div>)
                    })}</div> */}
                    {/* 메모 버튼 추가 */}
                </div>
                <div className="ProfilePicture">
                    <img src={picture}/>
                </div>
            </div>
            <div className="PhotoList">
                <li className="PhotoBox">
                    1
                </li>
                <li className="PhotoBox">2</li>
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
}

export default Profile;

