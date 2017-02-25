// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
// import Header from './common/Header';
// import Footer from './common/Footer';

class App extends React.Component {
    render() {
        return (
            <div>

              <div className="container">
                {this.props.children}
              </div>

            </div>
        );
    }
}

App.propTypes = {  
  children: PropTypes.object.isRequired
};

export default App;
