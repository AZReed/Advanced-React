import React from 'react';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import SickButton from './styles/SickButton';

const possiblePermissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE'
];

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => console.log(data) || (
      <div>
        <Error error={error} />
        <div>
          <h2>Mannage Permissions</h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {possiblePermissions.map(permissions => (
                  <th>{permissions}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{data.users.map(user => <User user={user} />)}</tbody>
          </Table>
        </div>
      </div>
    )}
  </Query>
);

class User extends React.Component {
  render () {
    const user = this.props.user;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {possiblePermissions.map(permission => (
          <td>
            <label htmlFor={`${user.id}-permissions-${permission}`}>
              <input type="checkbox" />
            </label>
          </td>
        ))}
        <SickButton>Update</SickButton>
      </tr>
    )
  }
}

export default Permissions;
