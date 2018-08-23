import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import AddProduct from "./AddProduct";
import ReactModal from "react-modal";
import { reloadDashboard } from '../actions';

class AddNewPopup extends Component {
  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.state = {
      showModal: props.showModal
    };
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    this.props.reloadDashboard();
  }

  afterOpenModal() {

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.showModal
    });
  }

  render() {

    return (
      <div>
        <ReactModal isOpen={this.state.showModal} onAfterOpen={this.afterOpenModal} shouldCloseOnOverlayClick={true} onRequestClose={this.handleCloseModal} contentLabel="Add Product Modal">
          <div className="modal-header no-padding">
            <a id="accordianLink" className="accordion-toggle collapsed">
              <div className="table-header readonly_head dark-grey-bg">
                <span id="nameSpan" className="middle bigger-140 name-span">{"Product Details"}</span>
                <button type="button" id="exitBtnDetails" className="close" aria-hidden="true" onClick={this.handleCloseModal}>
                  <span className="white">×</span>
                </button>
              </div>
            </a>
          </div>
          <AddProduct addNewProduct={this.props.addNewProduct}/>
        </ReactModal>
      </div>
    );
  }
}

AddNewPopup.propTypes = {
  reloadDashboard: PropTypes.func
};

function mapStateToProps(state) {
  return {

  };
}

export default connect(
  mapStateToProps,
  {
    reloadDashboard
  }
)(AddNewPopup);
