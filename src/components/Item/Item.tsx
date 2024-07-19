import styles from "./Item.module.scss";
import { ItemProps } from "./item.types";

export default function Item({ name, color, price }: ItemProps) {
  return (
    <section className={styles.item}>
      <span>{name}</span>
      <span>{color}</span>
      <span>Rs {price}</span>
    </section>
  );
}
