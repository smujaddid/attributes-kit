import React from 'react';

class SamplePrimitiveValue extends React.Component {
  render() {
    return (
      <div className="attributeSamplePrimitiveValue">
        {this.props.data.content || this.props.data}
      </div>
    );
  }
}

export default SamplePrimitiveValue;
