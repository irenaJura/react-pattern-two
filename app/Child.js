import React from 'react';

export class Child extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names">
          <option value="Irena">
            Irena
          </option>

          <option value="Sirena">
            Sirena
          </option>

          <option value="Selena">
            Selena
          </option>
        </select>
      </div>
    );
  }
}