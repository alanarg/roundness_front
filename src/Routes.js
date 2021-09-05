import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Pagina from './Components/Pagina/Blog';
import Vitrine from './Components/Vitrine/index';
// import Grupos from './Components/grupos/index';
import Admin from './Components/Admin/index';
import Cadastro from './Components/Cadastro/index';
import Login from './Components/Login/index';
import Profile from './Components/Estoque/index';
import Passwordreset from "./Components/passwordreset/index";
import Passwordforgot from "./Components/passwordforgot/index";
	
import * as loginActions from "./actions/login.action";



  
const Routes = ()=>{
  const SecuredRoute = ({ component: Component, ...rest }) => (
      
    <Route
      {...rest}
      render={props =>
      
        loginActions.isLoggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  

  return(
    <BrowserRouter>
        <Switch>
            <SecuredRoute exact path="/" component={Pagina}></SecuredRoute>
            <Route  path="/register" component={Cadastro}></Route>
            {/* <Route  path="/login/:notify?" component={Login}></Route> */}
            <Route  path="/login/:notify?" component={Login}></Route>
            <Route  path="/vitrine" component={Vitrine}></Route>
            <Route exact path="/password/reset/:token" component={Passwordreset}></Route>
            <Route path="/password/forgot" component={Passwordforgot}/>
            {/* <SecuredRoute path="/menu" component={Grupos}></SecuredRoute> */}
            <SecuredRoute path="/admin" component={Admin}></SecuredRoute>
            <SecuredRoute path="/perfil" component={Profile}></SecuredRoute>
        </Switch>
    </BrowserRouter>
    );
};

export default Routes;