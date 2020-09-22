import React from 'react';

class StrictAccess extends React.Component {
  render() {
    const { userName, password } = this.props;

    return (
    <div>
      Welcome {userName}! Please take care of your password {password}!
    </div>
    )
  }
}

export default StrictAccess;
