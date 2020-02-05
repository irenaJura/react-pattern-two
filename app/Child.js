import React from 'react';

export class Child extends React.Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      this.props.onChange(e.target.value);
  }
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
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