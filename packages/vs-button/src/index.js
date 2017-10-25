import React, { Component } from 'react';

class VSButton extends Component {
  constructor(props) {
    super(props);

    this.toggleHover = this.toggleHover.bind(this);
    this.toggleActive = this.toggleActive.bind(this);

    this.state = {
      hover: false,
      active: false,
      dark: false,
    };
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  toggleActive() {
    this.setState({ active: !this.state.active });
  }

  backgroundColorState() {
    if (this.props.dark) {
      if (this.props.disabled) {
        return 'rgba(255, 255, 255, 0.12)';
      } else if (this.state.active) {
        return '#E96300';
      } else if (this.state.hover) {
        return '#FFE7D7';
      } else if (this.props.color) {
        return this.props.color;
      }

      return '#fff';
    }

    if (this.props.disabled) {
      return 'rgba(0, 0, 0, 0.12)';
    } else if (this.state.active) {
      return '#DE5E02';
    } else if (this.state.hover) {
      return '#FD8835';
    } else if (this.props.color) {
      return this.props.color;
    }

    return '#FA6B03';
  }

  textColorState() {
    if (this.props.dark) {
      if (this.props.disabled) {
        return 'rgba(255, 255, 255, 0.26)';
      } else if (this.state.active) {
        return '#fff';
      } else if (this.state.hover) {
        return '#FA6B03';
      } else if (this.props.color) {
        return this.props.color;
      }

      return '#FA6B03';
    }

    if (this.props.disabled) {
      return 'rgba(0, 0, 0, 0.26)';
    } else if (this.state.active) {
      return '#fff';
    } else if (this.state.hover) {
      return '#fff';
    }

    return '#fff';
  }

  sizeState() {
    if (this.props.size === 'large') {
      return '133px';
    } else if (this.props.size === 'medium') {
      return '77px';
    } else if (this.props.size === 'small') {
      return '21px';
    }

    return '100%';
  }

  render() {
    const style = {
      backgroundColor: this.backgroundColorState(),
      color: this.textColorState(),
      textTransform: 'uppercase',
      border: 'none',
      padding: `15px ${ this.sizeState() }`,
      height: '48px',
      borderRadius: '4px',
      fontSize: '16px',
      fontFamily: 'IntCircularPro, IntCircularProBook, Arial',
      WebkitFontSmoothing: 'antialiased',
      cursor: 'pointer',
    };

    return (
      <button
        style={ style }
        onMouseEnter={ this.toggleHover }
        onMouseLeave={ this.toggleHover }
        onMouseDown={ this.toggleActive }
        onMouseUp={ this.toggleActive }
        disabled={ this.props.disabled }
      >
        {this.props.children}
      </button>
    );
  }
}

export default VSButton;
