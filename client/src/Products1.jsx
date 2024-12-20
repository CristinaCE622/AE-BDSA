/*import { useEffect, useState } from "react";
import { getProducts } from "../routes/products";

const Products = (props) => {
    const { filters, sorting } = props;
    const { cart } = useSelector((state) => state.cart);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
  
    const handleGetProducts = async () => {
      try {
        const response = await getProducts(filters, sorting);
        setProducts(response.products);
      } catch (error) {
        console.error(error);
      }
    };

const { useEffect } = require("react");
const { getProducts } = require("./routes/products");

function Products(props){
    const (filters, setFilters)= props;
    const (products, setProducts)=useState([]);

    const handleGetProducts=async ()=>{
        const data = await getProducts(filters);

        setProducts(data.products);
        }

        useEffect(()=>{
            handleGetProducts();
        },[filters])

       
        return  <div className="products-container">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h2 className="product-title">{product.title}</h2>
            <div className="rating">
              <span style={{ paddingLeft: "4px", paddingRight: "4px" }}>
                {product.rating}
              </span>
              <span>({product.reviews.length})</span>
            </div>
            <div className="price-cart">
              <p className="price">${product.price.toFixed(2)}</p>
              <div>
                  <i className="fas fa-shopping-cart"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
        
}

export default Products1

*/