import React from 'react';
import { Switch, Route } from 'react-router-dom';
import popular from '../component/popular';
import Home from '../component/home';
import Detail from '../component/popular/detail'

export default () => {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/popular" component={popular}/>
      <Route path="/detail/:id" component={Detail}/>
    </Switch>
  </div>
  )
}
