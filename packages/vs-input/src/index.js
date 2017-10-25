import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    } else if (this.props.dark) {
      return '#ffffff';
    }

    return '#37404B';
  }
  widthState() {
    const { size } = this.props;

    if (size === 'large') {
      return '544px';
    } else if (size === 'medium') {
      return '256px';
    } else if (size === 'small') {
      return '160px';
    }

    return '100%';
  }
  heightState() {
    if (this.props.size === 'medium') {
      return '48px';
    }

    return '100%';
  }
  render() {
    const { error, label, name, handleChange } = this.props;

    const styles = {
      wrapper: {
        display: 'grid',
      },
      labelWrapper: {
        width: '100%',
        marginTop: '8px',
      },
      input: {
        width: this.widthState(),
        height: this.heightState(),
        borderRadius: '4px',
        marginBottom: '8px',
        marginTop: '8px',
        padding: '16px',
        border: this.borderState(),
        backgroundColor: 'transparent',
        fontSize: '16px',
      },
      label: {
        color: this.labelState(),
        fontSize: '12px',
        fontFamily: 'IntCircularPro, Arial',
      },
      error: {
        color: '#E74C3C',
        fontSize: '12px',
        fontFamily: 'IntCircularPro, Arial',
      },
    };

    return (
      <div style={ styles.wrapper }>
        <div style={ styles.labelWrapper }>
          <span style={ styles.label }>{label}</span>
        </div>
        <input
          style={ styles.input }
          type="text"
          onChange={ handleChange }
          name={ name }
        />
        {error ? <span style={ styles.error }>{error}</span> : null}
      </div>
    );
  }
}

VSInput.propTypes = {
  error: PropTypes.string,
  disable: PropTypes.bool,
  active: PropTypes.bool,
  dark: PropTypes.bool,
  size: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.function,
};

VSInput.defaultProps = {
  error: null,
  disable: false,
  active: false,
  label: 'label',
};

export default VSInput;
