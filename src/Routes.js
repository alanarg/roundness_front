import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Pagina from './Components/Pagina/Blog';
// import Grupos from './Components/grupos/index';
import Admin from './Components/Admin/index';
import Cadastro from './Components/Cadastro/index';
import Login from './Components/Login/index';
import Profile from './Components/Profile/index';
import Passwordreset from "./Components/passwordreset/index";
import Passwordforgot from "./Components/passwordforgot/index";


//Verifica Se existe token para poder entrar na rota
const isLoggedIn = () => {
    return localStorage.getItem('TOKEN_KEY') != null;
  };
  const SecuredRoute = ({ component: Component, ...rest }) => (
      
    <Route
      {...rest}
      render={props =>
      
        isLoggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  
const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <SecuredRoute exact path="/" component={Pagina}></SecuredRoute>
            <Route  path="/register" component={Cadastro}></Route>
            {/* <Route  path="/login/:notify?" component={Login}></Route> */}
            <Route  path="/login/:notify?" component={Login}></Route>
            <Route exact path="/password/reset/:token" component={Passwordreset}></Route>
            <Route path="/password/forgot" component={Passwordforgot}/>
            {/* <SecuredRoute path="/menu" component={Grupos}></SecuredRoute> */}
            <SecuredRoute path="/admin" component={Admin}></SecuredRoute>
            <SecuredRoute path="/perfil" component={Profile}></SecuredRoute>
        </Switch>
    </BrowserRouter>
    
);
export default Routes;