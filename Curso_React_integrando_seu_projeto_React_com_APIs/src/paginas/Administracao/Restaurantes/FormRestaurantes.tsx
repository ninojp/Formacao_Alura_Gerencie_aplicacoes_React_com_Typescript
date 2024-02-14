import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormRestaurantes = () => {
    const parametros = useParams();
    const [nomeRestaurante, setNomeRestaurante] = useState('');

    useEffect(() => {
        if (parametros.id) {
            axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
            .then(resposta => setNomeRestaurante(resposta.data.nome));      
        };
    }, [parametros]);

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (parametros.id) {
            axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {nome: nomeRestaurante})
            .then(() => {
                alert('Restaurante Atualizado com sucesso!')
            });
        } else {
            axios.post('http://localhost:8000/api/v2/restaurantes/', {nome: nomeRestaurante})
            .then(() => {
                alert('Restaurante Cadastrado com sucesso!')
            });
        };
    };
    return (
        <form onSubmit={aoSubmeterForm}>
            <TextField 
                value={nomeRestaurante}
                onChange={evento => setNomeRestaurante(evento.target.value)}
                label="Nome do Restaurante" 
                variant="standard" />
            <Button type="submit" variant="outlined">Salvar</Button>
        </form>
    );
};
export default FormRestaurantes;