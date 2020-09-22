import React from 'react';

class Users extends React.Component {
  render() {
    const { greetingMessage, match } = this.props;
    const { id } = match.params;
    return (
      <div>
        <h2> Users </h2>
        <p> {greetingMessage}, this is my awesome Users component.
          You are user number {id}.
        </p>
      </div>
    )
  }
};

export default Users;
