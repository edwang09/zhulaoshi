import React from "react";
import classNames from 'classnames';
import "./header.scss";
import logo from "../assets/logo.png"
class Header extends React.Component{
    render(){
        return(
        <div className="header">
            <div className="title">
                <div className="logo"><img src={logo} alt="logo" /></div>    
                <h3>朱老师</h3>
            </div>
            <div className="auth">
                <ul>
                    <li>注册</li>
                    <li>登录</li>
                </ul>
            </div>

        </div>
        );
    }
}

export default Header;