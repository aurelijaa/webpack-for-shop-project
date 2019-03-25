import PropTypes from "prop-types";
import styled from "styled-components";

const ProductsContainer = styled.div`
  .Products-list {
    max-width: 1200px;
    padding: 0 50px;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
`;
// function ProductsContainer({ children, className }) {
//   return <div className=Products-list ${className}`}>{children}</div>;
// }

ProductsContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ProductsContainer.defaultProps = {
  className: "",
};

export default ProductsContainer;
