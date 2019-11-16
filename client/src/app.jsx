import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <h1>Webpack configured and that's enough.</h1>
        );
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));