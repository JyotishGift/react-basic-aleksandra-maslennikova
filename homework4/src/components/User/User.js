import React from 'react';
import { Redirect } from 'react-router-dom';

const User = (props) => (!props.user.name ? <div>Loading....</div> : <div>Hello, {props.user.name}  </div>);

export default User;
