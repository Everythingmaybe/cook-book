import React from 'react';

interface Props {active:boolean}

interface State extends Props {
    joke?: string
}

class Button extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            joke: "",
        }
    }

    componentDidMount() {
        this.getJokes();
    }

    getJokes() {
        fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((joke) => {this.setState({joke:(joke as any).value})})
    }

    toggle = () => {
        this.setState({active:!this.state.active});
        this.getJokes();
    }

    render() {
        const {active, joke} = this.state;
        return(
            <div>
                <button onClick={this.toggle}>Button: { active ? 'on' : 'off' }</button>
                <p>{joke}</p>
            </div>
        );
    }
}


export default Button;