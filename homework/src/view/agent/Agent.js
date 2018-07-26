import React,{Component} from 'react';
import './Agent.css';
import cf from '../../conf/config.json';
import $ from 'jquery';
import AgentAdd from '../../components/agent/AgentAdd';

export default class Agent extends Component{
    constructor(props){
        super(props);
        this.state={
            nav:"",
            data:[],
            physical:[1,1,1,1],
            virtual:[1,1,1,1],
            showAddBoolean:false
        }
    }

    req = ()=>{
        // console.log(cf.url+"/agents")
        $.get(`${cf.url}/agents`)
        .done((req)=>{
            // console.log(req)

           this.setState({
               data:req
           })        
        })
    }

    componentDidMount(){
        this.req()
    }

    showAdd = ()=>{
        this.setState({
            showAddBoolean:true
        })
    }

    sureAdd = ()=>{
        //  需要补充添加的方法  需要后端API 
        this.setState({
            showAddBoolean:false
        })
    }

    dele = ()=>{
        //删除的方法 需要后端API   
    }

    closeAdd = ()=>{

        this.setState({
            showAddBoolean:false
        })
    }



    render(){
        let {data,physical,virtual,showAddBoolean} = this.state;
        let {showAdd,sureAdd,closeAdd,dele} = this;

        let items = data.map((e,i)=>{
           
           
            return (
                <li className="a_list_li" key={i}>
                           <div>
                                <div className="a_list_li_box clear">
                                        <img 
                                            className="a_computer fl"
                                            alt=""
                                            src={require("../../common/images/electronics.png")}
                                        />
                                        <b className="fl a_computer_text">{e.name}</b>
                                        <em className="fl a_em">Building</em>
                                        {/* <i className="fl a_i">Idie</i> */}
                                </div>
                                <div className="a_list_li_info clear">
                                        <img 
                                            alt=""
                                            className="a_information fl"
                                            src={require("../../common/images/information.png")}
                                        />
                                        <b className="fl a_information_text">
                                            {e.ip}
                                        </b>
                                </div>
                                <div className="a_list_li_file clear">
                                        <img 
                                            alt=""
                                            className="a_file fl"
                                            src={require("../../common/images/file.png")}
                                        />
                                        <b className="fl a_file_text">
                                            {"give me some api,please!"}
                                        </b>
                                </div>
                                <div className="clear a_btn_list">
                                    <button 
                                        className="fl a_btn"
                                        onClick={showAdd}    
                                    >
                                        +
                                    </button> 
                                    <button className="fl a_btn">
                                        Firefox
                                        <img alt="" className="a_del" src={require("../../common/images/delete.png")}/>    
                                    </button> 
                                    <button className="fl a_btn">
                                        Safari
                                        <img alt="" className="a_del" src={require("../../common/images/delete.png")}/>    
                                    </button> 
                                    <button className="fl a_btn">
                                        Ubuntu
                                        <img alt="" className="a_del" src={require("../../common/images/delete.png")}/>    
                                    </button> 
                                    <button className="fl a_btn">
                                        Chrome
                                        <img alt="" className="a_del" src={require("../../common/images/delete.png")}/>    
                                    </button> 
                                </div>
                           </div>
                           
                        </li>
            )
        })
        // console.log(data)
        
        return(
            <div className="fl a_content">
                <div className="clear">
                    <div className="fl a_building">
                        <b className="a_building_text">Building</b>
                    </div>
                    <div className="fl a_idie">
                        <b className="a_idie_text">
                            Idie
                        </b>
                    </div>
                    <div className="fr a_third">
                        <div className="fl a_text">
                            <div>All</div>
                            <p className="a_textTop">{data.length-2}</p>
                        </div>
                        <div className="fl a_text">
                            <div>PHYSICAI</div>
                            <p className="a_textTop">{physical.length}</p>
                        </div>
                        <div className="fr a_text">
                            <div>VIRTUAI</div>
                            <p className="a_textTop">{virtual.length}</p>
                        </div>
                    </div>
                </div>
                <div className="clear a_nav">
                       
                    <div 
                        className="fl a_nav_style " >All
                    </div>
                    <div 
                        className="fl a_nav_style " >Physical
                    </div>
                    <div 
                        className="fl a_nav_style " >Virtual
                    </div>
                    <input type="text" name="" className="a_search"/>
                    <img alt="" className="fr a_zk" src={require('../../common/images/zk.png')} />
                    <img alt="" className="fr a_sq" src={require('../../common/images/sq.png')} />                      
                </div>
                <div className="a_list">
                    <ul className="">
                        {items}
                        
                    </ul>
                </div>
                {
                    showAddBoolean ? 
                    <AgentAdd 
                        sure={sureAdd} 
                        cancel={closeAdd}
                        message=" chrome safria"    
                    /> : ""
                }
            </div>
        )
    }
}