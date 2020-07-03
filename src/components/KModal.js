import React, {Component} from "react";
import ReactDOM from 'react-dom'

class KModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            focus: false,
            visible: false
        };
    }

    toggleHover = () => {
        this.setState({
            hover: true
        })
    }

    toggleUnHover = () => {
        this.setState({
            hover: false
        })
    }

    toggleFocus = () => {
        this.setState({
            focus: true
        })
    }

    static getDerivedStateFromProps(props, currentState) {
        if (currentState.visible !== props.visible) {
            return {
                visible: props.visible
            }
        }

        return null
    }

    render() {
        let styleCloseButton
        if (this.state.hover || this.state.focus) {
            styleCloseButton = {
                color: '#000',
                textDecoration: 'none',
                cursor: 'pointer',
                float: 'right',
                fontSize: 28,
                fontWeight: 'bold',
                height: 20,
                width: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
            }
        } else {
            styleCloseButton = {
                color: '#aaaaaa',
                float: 'right',
                fontSize: 28,
                fontWeight: 'bold',
                height: 20,
                width: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
            }
        }

        return (
            <div
                style={{
                    display: this.state.visible ? "initial" : "none",
                    position: "fixed",
                    zIndex: 1000000,
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'auto',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}>
                <div style={{
                    backgroundColor: '#fefefe',
                    margin: 'auto',
                    padding: '10px 10px 15px 10px',
                    width: '80%',
                    marginTop: '10%',
                    marginBottom: '10%',
                }}>
                    <span style={styleCloseButton}
                          onMouseEnter={this.toggleHover}
                          onMouseLeave={this.toggleUnHover}
                          onFocus={this.toggleFocus}
                          onClick={this.props.toggleClose}>
                        &times;
                    </span>
                    <div style={{padding: 10}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default KModal