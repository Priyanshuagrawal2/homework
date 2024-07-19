import Item from "../Item/Item";
import { ItemProps } from "../Item/item.types";
import styles from "./Home.module.scss";

export default function Home() {
  const items: ItemProps[] = [
    { name: "Fan", isFavorite: true, color: "black", price: 1000 },
    { name: "chair", isFavorite: false, color: "white", price: 400 },
    { name: "table", isFavorite: true, color: "black", price: 500 },
    { name: "lamp", isFavorite: false, color: "white", price: 300 },
    { name: "bed", isFavorite: true, color: "black", price: 700 },
    { name: "wardrobe", isFavorite: false, color: "white", price: 600 },
    { name: "sofa", isFavorite: true, color: "black", price: 900 },
    { name: "desk", isFavorite: false, color: "white", price: 800 },
    { name: "bookcase", isFavorite: true, color: "black", price: 200 },
    { name: "mirror", isFavorite: false, color: "white", price: 400 },
    { name: "painting", isFavorite: true, color: "black", price: 600 },
  ];
  return (
    <>
      <section className={styles.home}>
        <h2 className={styles.title}>Title</h2>
        <section className={styles.content}>
          <section className={styles.box}>
            <h1>Favorites</h1>
            {items.map((item) => {
              if (item.isFavorite) {
                return <Item key={item.name} {...item} />;
              }
            })}
          </section>
          <section className={styles.box}>
            <h1>Not Favorites</h1>
            {items.map((item) => {
              if (!item.isFavorite) {
                return <Item key={item.name} {...item} />;
              }
            })}
          </section>
        </section>
      </section>
    </>
  );
}
