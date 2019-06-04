import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Header/>
        {/* BrowserRouter 表示开始使用路由 */}
        <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        {/* <Route path='/' exact render={()=><div>home</div>}></Route>
        <Route path='/detail' exact render={()=><div>detail</div>}></Route> */}
        <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
