import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

import * as carsAction from '../../actions/carAction';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class HomePage extends React.Component {
  componentWillMount(){
    this.props.carsAction.loadCars();
  }

  render() {
      return (
        <section>
           <h1>Cars</h1>
             <BootstrapTable ref='table' data={this.props.cars} striped hover>
                <TableHeaderColumn isKey dataField='name' dataSort filter={{type: 'TextFilter', placeholder: 'Please enter a name'}}>NAME</TableHeaderColumn>
                <TableHeaderColumn dataField='model' dataSort filter={{type: 'TextFilter', placeholder: 'Please enter a model'}}>MODEL</TableHeaderColumn>
                <TableHeaderColumn dataField='engine' dataSort filter={{type: 'TextFilter', placeholder: 'Please enter a engine'}}>ENGINE</TableHeaderColumn>
                <TableHeaderColumn dataField='color' dataSort filter={{type: 'TextFilter', placeholder: 'Please enter a color'}}>COLOR</TableHeaderColumn>
            </BootstrapTable>,

        </section>
      );
  }
}

HomePage.propTypes = {
  cars: PropTypes.array.isRequired,
  carsAction: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    cars: state.cars
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    carsAction: bindActionCreators(carsAction, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
