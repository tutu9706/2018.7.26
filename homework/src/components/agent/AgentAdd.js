import React,{Component} from 'react';
import './AgentAdd.css';


/**
 * litu 2018/7/15
 * 说明:可接收父组件传入的三个参数,通过this.props获得。
 * 参数并分别作为 确定（sure）和取消（cancel）按钮触发的函数，message参数为提示文字，所有逻辑在父组件中书写，这里只做执行操作。
 * 
 * @export
 * @class Popup
 * @extends {Component}
 */
export default class AgentAdd extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let {
            sure,
            cancel,
            message
        } = this.props;


        return(
            <div className="Popup_bg">
                <div className="Popup_box">
                    <div className="Popup_head">
                        <span 
                            className="Popup_close"
                            onClick={cancel}    
                        >X</span>    
                    </div>
                    <p className="Popup_content">{message}?</p>
                    <div className="Popup_handle">
                        <button 
                            className="Popup_ok"
                            onClick={sure}    
                        >确定</button>
                        <button 
                            className="Popup_cancel"
                            onClick={cancel}        
                        >取消</button>                        
                    </div>

                </div>
            
            </div>
        )
    }
}