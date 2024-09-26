import React from "react";
import Header from "../../components/Header/Header";
import PricingPlansContainer from "../../components/Pricing/PricingPlansContainer";
import Form from "../../components/Form/Form";
import {TariffProvider} from "../../components/Pricing/TariffContext";

const LandingPage: React.FC = () => {
    return (
        <TariffProvider>
            <Header/>
            <PricingPlansContainer/>
            <Form/>
        </TariffProvider>
    )
}

export default LandingPage;