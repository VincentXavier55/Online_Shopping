import React, { Component } from 'react';


export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: { name: false, description: false, category: false, price: false },
            name: "",
            description: "",
            category: "",
            price: ""
        };
        this.mandatoryDataFields = ['name', 'description', 'category', 'price'];
        this.prevState = {};

        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    handleTextInputChange(field, evt) {
        this.setState({
            [field]: evt.target.value
        });
    }

    addProduct = () => {
        const { name, description, category, price } = this.state;
        const mandatoryData = { name, description, category, price, productId: 150, "shoppingDate": "2017-12-11", "discount": 2, "imageUrl": "images/shirt.png" };
        if (this.valid(mandatoryData)) {
            this.props.addNewProduct(mandatoryData);
        }
    }

    valid(mandatoryData) {
        const newErr = {};
        let isAllValid = true;
        for (const index of this.mandatoryDataFields) {
            let isError = false;
            isError = (mandatoryData[index] === null) || (mandatoryData[index].length === 0);
            newErr[index] = isError;
            if (isError) {
                isAllValid = false;
            }
        }
        this.setState({ error: newErr });
        return isAllValid;
    }

    render() {
        return (
            <div className="edit-section">
                <div id="addTable" className="add-content">
                    <div className="row">
                        {/* Name */}
                        <div className="col-sm-6 editable">
                            <div className="info-label col-md-3 col-sm-12">Name</div>
                            <div className="discloser-info-value col-md-9 col-sm-12">
                                <input type="text" className="form-control" placeholder={"Enter Name"} maxLength={"255"} value={this.state.name} onChange={(e) => { this.handleTextInputChange("name", e) }} />
                                {this.state.error.name && <span className="error-txt">{'*Field is mandatory'}</span>}
                            </div>
                        </div>
                        {/* Description */}
                        <div className="col-sm-6 editable">
                            <div className="info-label col-md-3 col-sm-12" >Description</div>
                            <div className="discloser-info-value col-md-9 col-sm-12">
                                <input type="text" className="form-control" placeholder={"Enter Description"} maxLength={"255"} value={this.state.description} onChange={(e) => { this.handleTextInputChange("description", e) }} />
                                {this.state.error.description && <span className="error-txt">{'*Field is mandatory'}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Category */}
                        <div className="col-sm-6 editable">
                            <div className="info-label col-md-3 col-sm-12">Category</div>
                            <div className="discloser-info-value col-md-9 col-sm-12">
                                <input type="text" className="form-control" placeholder={"Enter Category"} maxLength={"255"} value={this.state.category} onChange={(e) => { this.handleTextInputChange("category", e) }} />
                                {this.state.error.category && <span className="error-txt">{'*Field is mandatory'}</span>}
                            </div>
                        </div>
                        {/* Price */}
                        <div className="col-sm-6 editable">
                            <div className="info-label col-md-3 col-sm-12" >Price</div>
                            <div className="discloser-info-value col-md-9 col-sm-12">
                                <input type="number" className="form-control" placeholder={"Enter Price"} maxLength={"255"} value={this.state.price} onChange={(e) => { this.handleTextInputChange("price", e) }} />
                                {this.state.error.price && <span className="error-txt">{'*Field is mandatory'}</span>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add_btn_div">
                    <button id="addSaveBtn" className="btn btn-sm btn-info no-radius " type="button" onClick={() => { this.addProduct(); }}>
                        <i className="ace-icon fa fa-add"></i> Add Product
           			    </button>
                </div>
            </div>
        )
    }
}