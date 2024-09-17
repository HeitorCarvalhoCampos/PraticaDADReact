import styles from "./Product.module.css"

export default function Product({img,name,sacola}) {
    return (
        <div className={styles.container}>
            <img src={img} alt="Imagem de carne" className={styles.img}/>
            <div className={styles.description}>
                <h3>{name}</h3>
                <p className={styles.kg}>1Kg/Preço</p>
                <div className={styles.prices}>
                    <h4>R$ 000.000</h4>
                    <img src={sacola} alt="sacola" className={styles.sacola}/>
                </div>
            </div>
        </div>
    )
}