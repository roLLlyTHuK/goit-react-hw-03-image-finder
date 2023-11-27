import React from 'react';

export class Button extends React.Component {
  render() {
    const { onClick, disabled } = this.props;
    return (
      <button type="button" className="Button" onClick={onClick} disabled={disabled}>
        Load more
      </button>
    );
  }
}

