import React, { useContext, useEffect } from "react";
import DetailProduct from "./DetailProduct/DetailProduct";
import "./styles.css";
import { useParams, NavLink } from "react-router-dom";
import { ItemsContext } from "../../context/ItemsProvider";

const ItemDetail = () => {
  const { getItemsId, itemId } = useContext(ItemsContext);
  const { idProducto } = useParams();
  useEffect(() => {
    getItemsId(idProducto);
    // eslint-disable-next-line
  }, []);

  return (
    <section className="itemDetail pt-25vh mb-5">
      <div className="container-fluid">
        <div className="row no-gutters">
          {itemId === null ? (
            <div className="col-12 animate__animated animate__slideInDown animate__delay-3s">
              <div className="validateProduct">
                <h2>This product is no longer available.</h2>
                <NavLink to="/" exact className="backHome">
                  Back to Home
                </NavLink>
              </div>
            </div>
          ) : (
            <DetailProduct itemId={itemId} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;