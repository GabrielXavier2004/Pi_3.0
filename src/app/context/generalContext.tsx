import React, { createContext, useState } from "react";

export const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
    const [consultas, setConsultas] = useState([
        { id: "consulta1", nome: "Clínico Geral", data: "15/02/2024", hora: "14:30" }
    ]);
    const [medicacao, setMedicacao] = useState([
        {hora: "8:00", nome: "Losartana", quantidade: "150ml", alarme: true, discricao:"Remedio de uso oral"}
    ]);
    const [exames, setExames] = useState([]);
    const [perfil, setPerfil] = useState({
        nome: "Gustavo Prez",
        email: "gustavo@gmail.com",
        senha: "12345",
        peso: "40kg",
        altura: "1.85m"
    });

    const contextValues = {
        perfil,
        setPerfil,
        exames,
        setExames,
        medicacao,
        setMedicacao,
        consultas,
        setConsultas
    };

    return (
        <GeneralContext.Provider value={contextValues}>
            {children}
        </GeneralContext.Provider>
    );
};
