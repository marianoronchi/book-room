import React, {Component, PropTypes} from 'react';

export default class FormInput extends Component {
    state = { isActive: false }

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }

    onFocusBlur = (e) => {
        if (e.type === 'focus' || e.target.value.length > 0) {
            this.setState({isActive: true});
        } else {
            this.setState({isActive: false});
        }
    }

    render() {
        return (
            <div class={`form-group textinput ${this.state.isActive ? 'active': ''}`}>
                <label class='label-control'>
                    <span class='label-text'>{this.props.name}</span>
                </label>
                <input type={this.props.type}
                       name={this.props.name}
                       class='form-control'
                       onFocus={this.onFocusBlur}
                       onBlur={this.onFocusBlur}
                       onChange={this.props.onChange} />
            </div>
        );
    }
}
