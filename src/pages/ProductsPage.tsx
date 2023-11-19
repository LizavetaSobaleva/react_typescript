import React, { useContext } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";


export function ProductsPage() {
    const { loading, products, error, addProduct } = useProducts();
    const { modal, open, close } = useContext(ModalContext);
  
    const createHandler = (product: IProduct) => {
      close()
      addProduct(product)
    };
  
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
  
        {modal && (
          <Modal title="Create new product" onClose={close}>
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}
  
        <button
          type="submit"
          className="fixed bottom-5 right-5 rounded-full px-4 py-2 bg-green-600 text-white text-l hover:bg-green-700"
          onClick={open}
        >
          Create product
        </button>
      </div>
    );
}
