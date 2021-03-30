
import React, {Component} from 'react'

//css样式
import "./index.scss"


//组件
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class Login extends Component {
    constructor(popos){
        super(popos)
        this.state = {
            formType:"login"
        }
    }

    switchForm = (value)=>{
        this.setState({
            formType : value
        })
        console.log(value)
    }

    render(){
        return (
            <div className='form-wrap'>
                <div>
                    {
                    this.state.formType === "login" 
                    ?  <LoginForm switchForm={this.switchForm} />
                    : <RegisterForm switchForm={this.switchForm} />}
                </div>
            </div>
        
        )
    }
}
export default Login