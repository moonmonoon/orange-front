import React, { useState, useEffect } from "react";
import "./Inner.css";
import picture from '../images/profile.JPG'
import { BiPlus } from "react-icons/bi";
import axios from "axios";

const Inner = (props) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("https://www.orangeapi.ga/inner/likes/7/").then((response) => {
      setDatas(response.data);
    });
  }, []);
  return (
    <div>
      <div className="Background">
        <div className="UpBox">
          <div className="LikeBox">
            <div className="Title">
              <div> 🧡 What I Like </div>
              <div className="OnOffEye">eye</div>
            </div>
            <div className="LikeContent">
              <li className="LikeHash"> # Hamster
                {/* {datas.map(data =>{
                        return (<div key={data.pk}>
                            {data.profile.keyword1}
                            </div>)
                    })}*/}
              </li>
              <li className="LikeHash">
                # Economics
              </li>
              <li className="LikeHash">
                # Valley
              </li>
              <li className="LikeHash">
                # Jazz hiphop
              </li>
            </div>
            <a href="/user" className="Plus">
              {" "}
              {/* 사용자 추가기능으로 연결 */}
              <BiPlus size="2em" />
            </a>
          </div>
          <div className="PhotoBox">
            <div className="PhotoNTitle">
              <div className="CirclePhoto">
                <li>
                  <img src={picture}></img>
                </li>
              </div>
              <div className="ContentPhoto"></div>
            </div>
            {/* 원형 사진 여러개 배열 */}
          </div>
        </div>
        <div className="DownBox">
          <div className="StrengthBox">
            <div className="Title">
              <div> 🧡 What I Like </div>
              <div className="OnOffEye">eye</div>
            </div>
            <div className="LikeContent"></div>
            <a href="/user" className="Plus">
              <BiPlus size="2em" />
            </a>
          </div>
          <div className="StrengthBox">
            <div className="Title">
              <div> 🧡 What I Like </div>
              <div className="OnOffEye">eye</div>
            </div>
            <div className="LikeContent"></div>
            <a href="/user" className="Plus">
              <BiPlus size="2em" />
            </a>
          </div>
          <div className="StrengthBox">
            <div className="Title">
              <div> 🧡 What I Like </div>
              <div className="OnOffEye">eye</div>
            </div>
            <div className="LikeContent"></div>
            <a href="/user" className="Plus">
              <BiPlus size="2em" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inner;
