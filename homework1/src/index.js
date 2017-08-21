import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/lib/Table';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import * as styles from './main.css';
import userList from './users';

const mountNode = document.querySelector('.app');

const getGender = (gender) => {
  let userGender = 'MALE';
  if (gender === 'женский') {
    userGender = 'FEMALE';
  }
  return userGender;
};

const getBirthdate = (birthdate) => {
  console.log(birthdate);
  return birthdate.replace(/-/g, '.');
};

const UserBody = ({ user }) => {
  const birthdate = getBirthdate(user.birthdate);
  const gender = getGender(user.gender);
  return (<Col lg={9} md={9}>
    <Table bsClass="table-user-information">
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
    </Table>
  </Col>);
};
UserBody.propTypes = {
  user: PropTypes.object
};

const Title = ({ fullname }) => (<h3>{fullname}</h3>);

Title.propTypes = {
  fullname: PropTypes.string
};

const User = ({ user }) => {
  console.log('user', user);
  return (<Panel header={<Title fullname={user.fullName} />} bsStyle="info">
    <Row>
      <Col lg={3} md={3} >
        <img src={user.avatarUrl} alt={user.fullName} />
      </Col>
      <UserBody user={user} />
    </Row>
  </Panel >);
};

User.propTypes = {
  user: PropTypes.object
};


const UserList = ({ users }) => (<ul className={styles.unstyled}>
  {users.map(user => <li key={user.birthdate}><User user={user} /></li>)}
</ul>);

ReactDOM.render(<UserList users={userList} />, mountNode);

UserList.propTypes = {
  users: PropTypes.array
};
