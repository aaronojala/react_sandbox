import React from "react";
import Home from "./Home";
import Blog from "./Blog";
import NewPost from "./NewPost";
import Nothing from './Nothing';
import BlogPosts from './BlogPosts';

import {Switch, Route} from 'react-router-dom';

const Main = () => {
  return (
    <main>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/blog" component={BlogPosts}/>
      <Route path="/new_post" component={NewPost}/>
      <Route component={Nothing} />
    </Switch>
    </main>
  );
};

export default Main;
