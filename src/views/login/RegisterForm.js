
import React, {Component,Fragment} from 'react'

//ANTD组件
import { Form, Input, Button , Row, Col} from 'antd';
import { UserOutlined } from '@ant-design/icons';

class RegisterForm extends Component {
    constructor(popos){
        super(popos)
        this.state = {}
    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    toggleForm = ()=>{
        this.props.switchForm("login")
    }

    render(){
        return (
            <Fragment>
                    <div className="form-header">
                        <h4 className="column">注册</h4>
                        <span onClick={this.toggleForm}>账号登录</span>
                    </div>
                    <div className="form-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={()=>this.onFinish}
                            >
                            <Form.Item
                                name="username"
                                rules={
                                    [{
                                        required: true,message: '邮箱不能为空',},

                                    
                                   ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                            </Form.Item>

                            <Form.Item
                                name="Password1"
                                rules={[{required: true,message: '密码不能为空',},]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
                            </Form.Item>

                            <Form.Item
                                name="Password2"
                                rules={[{required: true,message: '密码不能为空',},]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
                            </Form.Item>

                            <Form.Item
                                name="code"
                                rules={[{required: true,message: '验证码不能为空',},]}
                            >
                                <Row gutter={13}>
                                    <Col span={15}>
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入验证码" />
                                    </Col>
                                    <Col span={9}>
                                        <Button type="danger" block>获取验证码</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" block>
                            注册
                                </Button>
                                
                            </Form.Item>
                        </Form>
                    </div>
                </Fragment>           
        
        )
    }
}
export default RegisterForm