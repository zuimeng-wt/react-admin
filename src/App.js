import React from  'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'



import Login from './views/login/Index'


class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {}
  }

  render(){
      return (
        <BrowserRouter>
            <Switch>
                <Route component={Login} exact path='/' />
          
            </Switch>
        </BrowserRouter>

      )
  }

}


export default App;
