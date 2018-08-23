import React, { Component } from 'react';
import PropTypes, { number, object } from 'prop-types';
import { connect } from 'react-redux';
import DetailsPopup from "../components/DetailsPopup";
import { fetchProducts, updateProduct, addProduct } from '../actions';
import AddNewPopup from '../components/AddNewPopup';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showAddModal: false,
      selectedProduct: {},
      productList: []
    }
    this.showDetails = this.showDetails.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.updateProductDetails = this.updateProductDetails.bind(this);
    this.addNewProduct = this.addNewProduct.bind(this);
  }

  static getBreadcrumb() {
    return <span className="current-page"></span>
  }

  showDetails(item) {
    this.setState({
      showModal: true,
      selectedProduct: item
    });
  }

  updateProductDetails(item) {
    this.props.updateProduct(item);
  }

  addNewProduct(item) {
    this.props.addProduct(item);
    this.setState({
      showAddModal: false
    });
  }

  showAddModal() {
    this.setState({
      showAddModal: true
    });
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      productList: nextProps.productList
    });
  }

  render() {

    return (
      <div className="adjust-padding" id="dashboard">
        <div className="heading">
          <span>Products</span>
          <button id="addSaveBtn" className="btn btn-sm btn-info no-radius add-link" type="button" onClick={() => { this.showAddModal(); }}>
            Add New
          </button>
        </div>
        <div className="line"></div>
        {this.state.productList &&
          this.state.productList.map(function (item, i) {
            return <div className="product-item col-sm-3" onClick={() => { this.showDetails(item); }}>
              <div className="item-img">
                <img src={item.imageUrl} />
              </div>
              <div className="item-desc">
                <span className="product-name">{item.name}</span>
                <span className="product-price">{"Price: $ " + item.price}</span>
                <span className="product-category">{"Category: " + item.category}</span>
              </div>
            </div>
          }, this)
        }
        <div><DetailsPopup showModal={this.state.showModal} selectedProduct={this.state.selectedProduct} updateProductDetails={this.updateProductDetails} /></div>
        <div><AddNewPopup showModal={this.state.showAddModal} addNewProduct={this.addNewProduct} /></div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  productList: PropTypes.array,
  updateProduct: PropTypes.func,
  addProduct: PropTypes.func,
  reload: PropTypes.bool
}

function mapStateToProps(state) {
  return {
    productList: state.products.productList,
    reload: state.products.reload
  }
}

export default connect(mapStateToProps, {
  fetchProducts, updateProduct, addProduct
})(Dashboard)