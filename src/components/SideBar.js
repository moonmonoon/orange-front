import React from "react";

import "./SideBar.css";
import { BiListUl, BiCameraMovie, BiPlus } from "react-icons/bi";

function SideBar(props) {
  return (
    <div className="MemoBar">
        <div className="MemoWrapper">
          <ul className="MemoList">
            <li className="MemoItemBox">
              <a href="/" className="MemoOpen"> {/* 여기에 메모 펼치기 기능 */}
                <BiListUl size='2em'/>
              </a>
            </li>
            <li className="MemoItemBox" id="ShadowCircle">
              <a href="/login" className="MemoItem">
                <BiCameraMovie size='2em' /> {/* 여기에 메모 아이콘 리스트 기능 */}
              </a>
            </li>
            <li className="MemoItemBox">
              <a href="/user" className="MemoPlus"> {/* 여기에 메모 아이콘 추가 기능 */}
                <BiPlus size='2em' /> {/* 추가 시 div가 늘어나야하는데 가능? */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default SideBar;