import React from "react";

import SwipeableViews from 'react-swipeable-views';
import classNames from 'classnames';
import "./home.scss";
import trees from "../assets/trees.png"
import male from "../assets/male.png"
import female from "../assets/female.png"
class Home extends React.Component{
    
    state = {
        tab: 0,

    }
    handleChangeIndex = index => {
        this.setState({
            tab:index,
        });
    };
    handleChange = tab => {
        this.setState({
            tab,
        });
    };
    render(){
        return(
        <div className="home">
            <div className="banner">
                <div className="logo">
                    <div className="logoicon"></div>
                    <p className="logotext">樹洞</p>
                </div>
                <div className="title">
                    <p className="title1">今天的你，</p>
                    <p className="title2">過的好嗎？</p>
                </div>            
                <div className="trees">
                    <img src={trees} alt="trees"/>
                </div>
                <div className="buttons">
                    <button className="reserve">預約傾聽者</button>
                    <button className="become">成為傾聽者</button>
                </div>

            </div>
            <div className="content">
                <div className="tabs">
                    <div className={classNames("tab",{"active":this.state.tab===0})} onClick={()=>{this.setState({tab:0 })}}>
                        <p>理念</p>
                    </div>
                    <div className={classNames("tab",{"active":this.state.tab===1})} onClick={()=>{this.setState({tab:1 })}}>
                        <p>預約</p>
                    </div>
                    <div className={classNames("tab",{"active":this.state.tab===2})} onClick={()=>{this.setState({tab:2 })}}>
                        <p>聯繫</p>
                    </div>
                </div>
            <SwipeableViews index={this.state.tab} onChangeIndex={this.handleChangeIndex}>
                    <div  className="slide">
                    理念內容
                    </div>
                    <div  className="slide reserve">
                        <div className="message">
                            <h3>感謝您的支持</h3>
                            <p>我們是一個很小的團隊，工作之餘希望能盡一份心意去打造一個平台，讓每個人都有個安心抒發內心的空間。希望每個人在需要的時候都能找到一個人傾訴，在黑夜中為您點上一盞燈。</p>
                        </div>
                        <div className="listener">
                            <h3>傾聽者</h3>
                            <div className="gallery">
                                <div className="card">
                                    <div className="photo">
                                        <img src={female} alt="female"/>
                                    </div>
                                    <div className="name">
                                    劉婉婷
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="photo">
                                        <img src={male} alt="male"/>
                                    </div>
                                    <div className="name">
                                    王辰浩
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="action">
                            <button className="search">配對傾聽者</button>
                        </div>
                    </div>
                    <div  className="slide contactus">
                    <form>
                        <h3>聯繫</h3>
                        <div className="formgroup">
                            <textarea name="contactus" id="" cols="30" rows="10" 
                            value={this.state.contactus}
                            onChange={(e)=>{this.setState({contactus:e.target.value})}}
                            ></textarea>
                        </div>
                        <div className="actions">
                            <button className="submit">
                                提交
                            </button>
                        </div>
                    </form>
                    </div>
                </SwipeableViews>
            </div>



        </div>
        );
    }
}

export default Home;