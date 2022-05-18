import styles from "../styles/Testimonials.module.css";
import Circle from "./Circle";
import { users } from "../data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
      <h1 className={styles.title}>Testimonials</h1>

      <div className={styles.wrapper}>
        {users.map((user) => (
          <div className={styles.card} key={user.id}>
            <Image src={`/img/${user.logo}`} height="30" width="30" alt="" />
            <p className={styles.comment}>{user.comment}</p>

            <div className={styles.person}>
              <Image
                className={styles.avater}
                src={`/img/${user.avatar}`}
                height="45"
                width="45"
                objectFit="cover"
                alt=""
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
