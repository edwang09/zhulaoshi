import React from "react";
import classNames from 'classnames';
import {Link} from "react-router-dom"
import "./footer.scss";
class Footer extends React.Component{
    render(){
        return(
        <div className="footer">
            <div className="links">
                <div className="linktab">
                    <h3>如何使用</h3>
                    <Link to="/">帮助</Link>
                    <Link to="/">小组</Link>
                    <Link to="/">论坛</Link>
                    <Link to="/">你问我答</Link>
                </div>
                
                <div className="linktab">
                    <h3>关于</h3>
                    <Link to="/">关于我们</Link>
                    <Link to="/">社会招聘</Link>
                    <Link to="/">校园招聘</Link>
                    <Link to="/">关于我们</Link>
                </div>
                
                <div className="linktab">
                    <h3>合作伙伴</h3>
                    <Link to="/">合作联系</Link>
                    <Link to="/">合作条款</Link>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2009-2020 版权所有：信息科技有限公司</p>
                <p><a>苏ICP备13045540号-2</a> 公安备案号：32010202010034</p>
            </div>

        </div>
        );
    }
}

export default Footer;