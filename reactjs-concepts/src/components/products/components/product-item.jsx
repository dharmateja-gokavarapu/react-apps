import styles from "./product-item.module.css";

function Button() {
  return <button className={styles.buttonStyle}>Click</button>;
}

function ProductItem({ singleProductItem, index }) {
  return (
    <div className={styles.list}>
      <p>{singleProductItem}</p>
      <Button />
    </div>
  );
}

export default ProductItem;
