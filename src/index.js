import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import * as styles from './main.css';

const mountNode = document.querySelector('.app');

import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.querySelector('.app');
const UserBody = (user) => {
  const birthdate = getBirthdate(user.birthday);
  const gender = getSex(user.gender);
  (<div className ={`${bootstrap.col-md-9} ${bootstrap.col-lg-9}`}>
      <table className={`${bootstrap.table} ${bootsrtap.table-user-information}`}>
        <tbody>
          <tr>
            <td>Дата рождения</td>
            <td>{birthdate}</td>
          </tr>
          <tr>
            <td>Пол</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>Адрес</td>
            <td>{user.address}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td><a>{user.email}</a></td>
            </tr>
        </tbody>
      </table>
    </div>)
  }

const User = (user) => {
 return (<div className={`${bootstrap.panel} ${bootstrap.panel-info}`}>
  <div className={bootstrap.panel-heading}>
    <h3 class="panel-title">USER FULL NAME !</h3>
  </div>
  <div class="panel-body">
    <div class="row">
      <div>
        <div class="col-md-3 col-lg-3 " align="center">
          <img src="http://psdexport.com/storage/avatars/default.png" class="pull-left">
        </div>
}

let someArray = ['Angular', 'Vue', 'React'];

const List = props => {
  return <ul>
    {props.arr.map(item => <li key={item}>{item}</li>)}
  </ul>
}

ReactDOM.render(<List arr={someArray} />, mountNode);

