import styles from "./Section.module.css"
import Product from "../Product/Product"
import meat1 from "../../assets/meat1.png"
import meat2 from "../../assets/meat2.png"
import meat3 from "../../assets/meat3.png"
import sacola1 from "../../assets/sacola1.svg"
import sacola2 from "../../assets/sacola2.svg"

const meats = [meat1, meat2, meat3]

const sacolas = [sacola1, sacola2]


export default function Section() {
    return(
        <div>
            <div className={styles.cliente}>
                <h1>Client+</h1>
                <div className={styles.promo}>promo</div>
                <div className={styles.products}>
                    <Product name={"Item 1"} img={meats[0]} sacola={sacolas[0]}/>
                    <Product name={"Item 2"} img={meats[1]} sacola={sacolas[0]}/>
                    <Product name={"Item 3"} img={meats[2]} sacola={sacolas[0]}/>
                </div>
            </div>
            <div className={styles.outros}>
                <h1>Outros</h1>
                <div className={styles.saudavel}>saudável</div>
                <div className={styles.products}>
                    <Product name={"Item 1"} img={meats[0]} sacola={sacolas[1]}/>
                    <Product name={"Item 2"} img={meats[1]} sacola={sacolas[1]}/>
                    <Product name={"Item 3"} img={meats[2]} sacola={sacolas[1]}/>
                </div>
            </div>
        </div>
    )
}