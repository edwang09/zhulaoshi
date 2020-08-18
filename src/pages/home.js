import React from "react";
import classNames from "classnames"
import "./home.scss";
import study from "../assets/study.png"
import icon from "../assets/icons.png"
import potrait from "../assets/potrait.png"
import tsinghua from "../assets/tsinghua.png"
class Home extends React.Component{
    
    state = {
        tab: 0,
        currentIndex:0

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
            <section className="education">
                <div className="intro">
                    <h3>英语教学</h3>
                    <div className="status">目前有 2 人学习中</div>
                    <p>语教学英语教学英语，英语教学英语教学英语教学英语教学英语教学英语教学英语教学英语教学英语教学英语教学英语教学英语教学英语教学英语教学英语教学英语教学，英语教学英语教学英语教学英语教学英语教学英语教学语教学。</p>
                    <div className="buttons">
                        <button className="signup">免费注册</button>
                        <button className="watch">观看简介影片</button>
                    </div>
                </div>
                <div className="slide">
                    <div className="dots">
                        <div className={classNames({
                                    "dot":true,
                                    "current":this.state.currentIndex===0
                                })}></div>
                                
                        <div className={classNames({
                                    "dot":true,
                                    "current":this.state.currentIndex===1
                                })}></div>
                        <div className={classNames({
                                    "dot":true,
                                    "current":this.state.currentIndex===2
                                })}></div>
                        <div className={classNames({
                                    "dot":true,
                                    "current":this.state.currentIndex===3
                                })}></div>
                    </div>
                    <div className="carousel">
                        <div 
                            onClick={()=>{this.setState(({currentIndex})=>{return {currentIndex: currentIndex-1}})}}
                            className={classNames({
                                    "left":true,
                                    "hide":this.state.currentIndex===0
                                })}>&lt;</div>
                        <div className="content">
                            <div className={classNames({
                                "previous":this.state.currentIndex===1,
                                "current":this.state.currentIndex===0,
                                "next":this.state.currentIndex===-1, 
                                })}>
                                
                                <div className="card">
                                    <div className="potrait">
                                        <img src={potrait} alt="potrait"/>
                                    </div>
                                    <div className="bios">
                                        <div className="basic">
                                            <h5>吴佳怡 22</h5>
                                            <p>清华大学经济系</p>
                                        </div>
                                        <div className="university">
                                            <img src={tsinghua} alt="tsinghua"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="quote">
                                    <div className="quotemark">“</div>
                                    <p>非常感谢在这里遇到的每个人，非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人。</p>
                                </div>
                            </div>
                            <div className={classNames({
                                "previous":this.state.currentIndex===2,
                                "current":this.state.currentIndex===1,
                                "next":this.state.currentIndex===0, 
                                })}>
                                <div className="card">
                                    <div className="potrait">
                                        <img src={potrait} alt="potrait"/>
                                    </div>
                                    <div className="bios">
                                        <div className="basic">
                                            <h5>吴佳怡 22</h5>
                                            <p>清华大学经济系</p>
                                        </div>
                                        <div className="university">
                                            <img src={tsinghua} alt="tsinghua"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="quote">
                                    <div className="quotemark">“</div>
                                    <p>非常感谢在这里遇到的每个人，非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人。</p>
                                </div>
                            </div>
                            <div className={classNames({
                                "previous":this.state.currentIndex===3,
                                "current":this.state.currentIndex===2,
                                "next":this.state.currentIndex===1, 
                                })}>
                                <div className="card">
                                    <div className="potrait">
                                        <img src={potrait} alt="potrait"/>
                                    </div>
                                    <div className="bios">
                                        <div className="basic">
                                            <h5>吴佳怡 22</h5>
                                            <p>清华大学经济系</p>
                                        </div>
                                        <div className="university">
                                            <img src={tsinghua} alt="tsinghua"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="quote">
                                    <div className="quotemark">“</div>
                                    <p>非常感谢在这里遇到的每个人，非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人。</p>
                                </div>
                            </div>
                            <div className={classNames({
                                "previous":this.state.currentIndex===-1,
                                "current":this.state.currentIndex===3,
                                "next":this.state.currentIndex===2, 
                                })}>
                                <div className="card">
                                    <div className="potrait">
                                        <img src={potrait} alt="potrait"/>
                                    </div>
                                    <div className="bios">
                                        <div className="basic">
                                            <h5>吴佳怡 22</h5>
                                            <p>清华大学经济系</p>
                                        </div>
                                        <div className="university">
                                            <img src={tsinghua} alt="tsinghua"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="quote">
                                    <div className="quotemark">“</div>
                                    <p>非常感谢在这里遇到的每个人，非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人非常感谢在这里遇到的每个人。</p>
                                </div>
                            </div>
                        </div>
                        <div 
                        onClick={()=>{this.setState(({currentIndex})=>{return {currentIndex: currentIndex+1}})}}
                        className={classNames({
                                "right":true,
                                "hide":this.state.currentIndex===3
                                })}>&gt;</div>
                    </div>
                </div>
            </section>
            <section className="procedure">
                <div className="procedurecontent">
                    <h3>学习流程</h3>
                    <div className="demo">
                        <div className="illustration"><img src={study} alt="study"/></div>
                        <div className="steps">
                            <div className="step">
                                <div className="index">1</div>
                                <div className="detail">
                                    <h4>日历上设定时间</h4>
                                    <p>日历上会显示日历上会显示日历上会显示日历上会显示日历上会显示。</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="index">2</div>
                                <div className="detail">
                                    <h4>日历上设定时间</h4>
                                    <p>历上会显示日历历上会显示日历历上会显示日历历上会显示日历。</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="index">3</div>
                                <div className="detail">
                                    <h4>日历上设定时间</h4>
                                    <p>会显示日历历上会显示日历历上会显示日历历上会阿斯顿发发。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fitting">
                <h3>适合人群</h3>
                
                <div className="texts">
                    <div className="ptab">
                        <div className="icon">
                            <img src={icon} alt="icon"/>
                        </div>
                        <h4>学生</h4>
                        <p>学生</p>
                        <p>学生</p>
                        <p>学生</p>
                    </div>
                    <div className="ptab">
                        <div className="icon">
                            <img src={icon} alt="icon"/>
                        </div>
                        <h4>互联网行业</h4>
                        <p>学生</p>
                        <p>学生</p>
                        <p>学生学生</p>
                    </div>
                    <div className="ptab">
                        <div className="icon">
                            <img src={icon} alt="icon"/>
                        </div>
                        <h4>自由职业者</h4>
                        <p>学生</p>
                        <p>学生学生</p>
                        <p>学生学生</p>
                    </div>
                    <div className="ptab">
                        <div className="icon">
                            <img src={icon} alt="icon"/>
                        </div>
                        <h4>其他行业</h4>
                        <p>学生</p>
                        <p>学生</p>
                        <p>学生学生</p>
                    </div>
                </div>

            </section>
        </div>
        );
    }
}

export default Home;