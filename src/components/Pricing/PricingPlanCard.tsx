import React from "react";
import styles from "./PricingPlanCard.module.scss";
import {useTariff} from "./TariffContext";

interface PricingPlanCardProps {
    id: string | number;
    title: string;
    description: string;
    features: string[];
    price: string;
    oldPrice?: string;
    isPopular?: boolean;
}

const PricingPlanCard: React.FC<PricingPlanCardProps>
    = ({
           id,
           title,
           description,
           features,
           price,
           oldPrice,
           isPopular = false,
       }) => {

    const {setSelectedTariffId} = useTariff();

    return (
        <div className={`${styles.card} ${isPopular ? styles.popular : ''}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
            <span className={styles.price}>{price}</span>
            <span className={styles.id}>{id}</span>
            <button className={styles.buyButton} onClick={() => setSelectedTariffId(id)}>
                Купить
            </button>
        </div>
    )
}

export default PricingPlanCard;