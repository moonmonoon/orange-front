import React from "react";
import styled from "styled-components";
import "./Prism.css";
import { BiPlus } from "react-icons/bi";

const Prism = (props) => {
    return (
        <div>
          <div className="Background">
            <div className="UpBox">
              <div className="LikeBox">
                <div className="Title">
                  <div> 🧡 What I Like </div>
                  <div className="OnOffEye">eye</div>
                </div>
                <div className="LikeContent"></div>
                <a href="/user" className="Plus"> {/* 사용자 추가기능으로 연결 */}
                  <BiPlus size="2em" />
                </a>
              </div>
              <div className="PhotoBox">
                <div className="PhotoNTitle">
                  <div className="CirclePhoto"></div>
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
            </div>
          </div>
        </div>
      );
    };


export default Prism;

