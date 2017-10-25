import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ERROR,
  GREEN,
  DARK_GRAY,
  LIGHT_GRAY,
  BORDER_GRAY,
  WHITE,
  BORDER_RADIUS,
  ELEMENT_PADDING,
  INNER_PADDING,
  LABEL_SIZE,
  FONT_SIZE,
  FONT,
} from '@vivintsolar-oss/web-vs-style';

class VSInput extends Component {
  borderState() {
    if (this.props.disable) {
      return `1px dashed ${ LIGHT_GRAY }`;
    } else if (this.props.active) {
      return `2px solid ${ GREEN }`;
    } else if (this.props.error) {
      return `2px solid ${ ERROR }`;
    }

    return `1px solid ${ BORDER_GRAY }`;
  }
  labelState() {
    if (this.props.active) {
      return GREEN;
    } else if (this.props.error) {
      return ERROR;
    } else if (this.props.dark) {
      return WHITE;
    }

    return DARK_GRAY;
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
  }
  heightState() {
    if (this.props.size) {
      return '48px';
    }
  }
  render() {
    const { error, label, name, className, handleChange } = this.props;

    const styles = {
      wrapper: {
        display: 'grid',
      },
      labelWrapper: {
        width: '100%',
        marginTop: ELEMENT_PADDING,
      },
      input: {
        width: this.widthState(),
        height: this.heightState(),
        borderRadius: BORDER_RADIUS,
        marginBottom: ELEMENT_PADDING,
        marginTop: ELEMENT_PADDING,
        padding: INNER_PADDING,
        border: this.borderState(),
        backgroundColor: 'transparent',
        fontSize: FONT_SIZE,
      },
      label: {
        color: this.labelState(),
        fontSize: LABEL_SIZE,
        fontFamily: FONT,
      },
      error: {
        color: ERROR,
        fontSize: LABEL_SIZE,
        fontFamily: FONT,
      },
    };

    return (
      <label htmlFor={ name } style={ styles.wrapper }>
        <span style={ styles.label }>{label}</span>
        <input
          className={ className }
          style={ styles.input }
          type="text"
          onChange={ handleChange }
          name={ name }
        />
        {error ? <span style={ styles.error }>{error}</span> : null}
      </label>
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
  className: PropTypes.string,
  handleChange: PropTypes.function,
};

VSInput.defaultProps = {
  error: null,
  disable: false,
  active: false,
  label: 'label',
};

export default VSInput;
