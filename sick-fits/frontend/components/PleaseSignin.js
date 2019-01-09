// import React from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

const PleaseSignin = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <p>Please Sign In before Continuing</p>
            <Signin />
          </div>
        );
      }

      // Option 1
/*       const childrenWithProps = React.Children.map(props.children, child =>
        React.cloneElement(child, { userId: data.me.id })
      );
      return childrenWithProps; */

      // Option 2
      // return React.cloneElement(props.children, { userId: data.me.id })

      // Option 3
      return props.children;
    }}
  </Query>
);

export default PleaseSignin;
