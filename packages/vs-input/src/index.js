import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class VSInput extends Component {
  borderState() {
    if (this.props.disable) {
      return '1px dashed #8e8e93';
    } else if (this.props.active) {
      return '2px solid #3fbfad';
    } else if (this.props.error) {
      return '2px solid #E74C3C';
    }

    return '1px solid #D9DADB';
  }
  labelState() {
    if (this.props.active) {
      return '#3fbfad';
    } else if (this.props.error) {
      return '#E74C3C';
    }

    return '#37404B';
  }
  render() {
    const { error, label, reference } = this.props;

    const styles = {
      wrapper: {
        display: 'grid',
      },
      labelWrapper: {
        width: '100%',
        marginTop: '8px',
      },
      input: {
        width: '256px',
        height: '48px',
        borderRadius: '4px',
        marginBottom: '8px',
        marginTop: '8px',
        padding: '16px',
        border: this.borderState(),
      },
      label: {
        color: this.labelState(),
        fontSize: '12px',
        fontFamily: 'IntCircularPro',
      },
      error: {
        color: '#E74C3C',
        fontSize: '12px',
        fontFamily: 'IntCircularPro',
      },
    };

    return (
      <div style={ styles.wrapper }>
        <div style={ styles.labelWrapper }>
          <span style={ styles.label }>{label}</span>
        </div>
        <input style={ styles.input } type="text" ref={ reference } />
        {error ? <span style={ styles.error }>{error}</span> : null}
      </div>
    );
  }
}

// VSInput.propTypes = {
//   error: PropTypes.string,
//   disable: PropTypes.bool,
//   active: PropTypes.bool,
//   label: PropTypes.string,
//   reference: PropTypes.function,
// };

VSInput.defaultProps = {
  error: null,
  disable: false,
  active: false,
  label: 'label',
};

export default VSInput;
