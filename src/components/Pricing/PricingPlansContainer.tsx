import React from "react";
import PricingPlanCard from "./PricingPlanCard";

const plans = [
    {
        id: 1144,
        title: "Лайт",
        description: "Круглосуточные устные консультации и документы...",
        features: ["1 пользователь", "Обслуживание 6 месяцев", "Все отрасли права", "4 предоставляемые услуги"],
        price: "1000 ₽",
        oldPrice: "1500 ₽",
    },
    {
        id: 1145,
        title: "Стандарт",
        description: "Больше круглосуточных консультаций и документов...",
        features: ["1 пользователь", "Обслуживание 6 месяцев", "Все отрасли права", "7 предоставляемых услуг"],
        price: "2500 ₽",
        oldPrice: "3500 ₽",
        isPopular: true,
    },
    {
        id: 1146,
        title: "VIP",
        description: "Максимальная круглосуточная защита...",
        features: ["До 2 пользователей", "Обслуживание 6 месяцев", "Все отрасли права", "10 предоставляемых услуг"],
        price: "3000 ₽",
        oldPrice: "4400 ₽",
    },
];


const PricingPlansContainer: React.FC = () => {
    return (
        <div>
            {plans.map(plan => (
                <PricingPlanCard key={plan.id} {...plan}/>
            ))}
        </div>
    )
}

export default PricingPlansContainer;