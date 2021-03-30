
import React, {Component,Fragment} from 'react'

//ANTD组件
import { Form, Input, Button , Row, Col ,message} from 'antd';
import { UserOutlined   } from '@ant-design/icons';

//验证正则
import {validate_password } from '../../utils/validate'

//API接口
import {Login , GetCode} from '../../api/account'

class LoginForm extends Component {
    constructor(popos){
        super(popos)
        this.state = {
            username:'',
            // code_button_disabled:true
            code_button_loading : false,
            code_button_disabled:false, //激活按钮
            code_button_text : "获取验证码",
        }
    }
    //登录
    onFinish = (values) => {
        
        Login().then(response =>{
           
           
        }).catch(error =>{
            console.log(error)
        })
        console.log('Received values of form: ', values);
    }

    

    //获取验证码
    getCode = ()=>{
        if(!this.state.username){
            message.warning('邮箱不能为空',1);
            return false
        }

        this.setState({
            code_button_loading:true,
            code_button_text:"发送中"
        })

        const requestData = {
            username : this.state.username,
            module : "login"
        }

        GetCode(requestData).then(response => {
          
            //执行倒计时函数
            this.countDown()
        }).catch(error => {
            this.setState({
                code_button_loading:false,
                code_button_text:"重新获取"
            })
    
        })
    }

    //倒计时函数
    countDown = ()=>{
        //定义定时器
        let timer = null

        //定时器时间
        let sec = 5;

        //重新修改状态
        this.setState({
            code_button_loading:false,
            code_button_disabled:true,
            code_button_text:`${sec}s`
        })
        

        //setInterval \ clearInterval 不间断执行
        //setTimeout \ clearTimeout 只执行一次
        timer = setInterval(()=>{
            sec --
            if(sec <= 0 ){
                this.setState({
                    code_button_text:`重新获取`,
                    code_button_disabled:false,
                })
                clearInterval(timer)
                return false
            }
            this.setState({
                code_button_text:`${sec}s`
            })
        },1000)
    }

    //input 输入内容
    inputChange = (e)=>{
        let value = e.target.value
        this.setState({
            username : value
        })
    }


    toggleForm = ()=>{
        //调父级方法
        this.props.switchForm("register")
    }

    render(){
        const {username,code_button_loading,code_button_text,code_button_disabled} = this.state
        // const _this = this
        return (
           
                <Fragment>
                    <div className="form-header">
                        <h4 className="column">登录</h4>
                        <span onClick={this.toggleForm}>账号注册</span>
                    </div>
                    <div className="form-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onFinish}
                            >
                            <Form.Item
                                name="username"
                                rules={
                                    [
                                        { required: true,message: '邮箱不能为空'},
                                        {type:"email",message: '邮箱格式不正确'}
                                        // ({ getFieldValue }) => ({   第二种验证方法
                                        //     validator(_, value) {
                                        //       if(validate_email(value)){
                                        //         _this.setState({
                                        //             code_button_disabled : false
                                        //           })
                                        //           return Promise.resolve()
                                        //       }
                                
                                        //       return Promise.reject(new Error('邮箱格式不正确'));
                                        //     },
                                        //   }),
                            ]}
                            >
                                <Input value = {username} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                            </Form.Item>

                            <Form.Item
                                name="Password"
                                rules={
                                    [
                                    {required: true,message: '密码不能为空',},
                                    {pattern:validate_password,message:'密码至少包含 数字和英文，长度6-20'}
                                    ]
                                }
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Password" />
                            </Form.Item>

                            <Form.Item
                                name="code"
                                rules={[
                                    {required: true,message: '验证码不能为空',},
                                    {len : 6,message: '请输入6位验证码',}
                                ]}
                            >
                                <Row gutter={13}>
                                    <Col span={15}>
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入验证码" />
                                    </Col>
                                    <Col span={9}>
                                        <Button type="danger" 
                                            block 
                                            disabled={code_button_disabled}
                                            loading = {code_button_loading}
                                            // disabled={code_button_disabled}  第二种验证方法
                                            onClick={this.getCode}
                                        >   
                                            {code_button_text}
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        
                            <Form.Item>
                                <Button type="primary"  htmlType="submit" className="login-form-button" block>
                            登录
                                </Button>
                                
                            </Form.Item>
                        </Form>
                    </div>
                </Fragment>           
      
        )
    }
}
export default LoginForm