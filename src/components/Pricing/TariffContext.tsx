import React, {useState, createContext, useContext} from "react";

interface TariffContextType {
    selectedTariffId: string | number | null;
    setSelectedTariffId: (id: string | number) => void;
}

const TariffContext = createContext<TariffContextType | undefined>(undefined);

export const TariffProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [selectedTariffId, setSelectedTariffId] = useState<string | number | null>(null);

    return (
        <TariffContext.Provider value={{selectedTariffId, setSelectedTariffId}}>
            {children}
        </TariffContext.Provider>
    );
}

export const useTariff = (): TariffContextType => {
    const context = useContext(TariffContext);
    if (!context) {
        throw new Error("useTariff must be used within a TariffProvider");
    }
    return context;
};