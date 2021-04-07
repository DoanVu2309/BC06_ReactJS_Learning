import React, { Component } from "react";
import Product from "./Product"
class ProductList extends Component {
    // Kết thừa từ Component nên lúc nào cũng phải có render() để gọi phương thức
    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
        );
    }
}
export default ProductList