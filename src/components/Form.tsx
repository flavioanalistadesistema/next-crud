import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps{
    client: Client
    alterClient?: (client: Client) => void
    canceled?: () => void
}

export default function Form(props: FormProps) {
        const id = props.client?.id
        const [name, setName] = useState(props.client?.name ?? '')
        const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>            
            {id ? (
                <Input 
                    readonly
                    text="Codigo" 
                    value={id}
                    className="mb-4"
                />
            ) : false}

            <Input 
                text="Nome" 
                value={name}
                className="mb-4"
                onChange={setName}
            />
            
            <Input 
                text="Idade" 
                type="number" 
                value={age}
                onChange={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button 
                    color="blue" 
                    onClick={() => props.alterClient?.(new Client(name, +age, id))}
                    className="mr-2">{id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button
                    onClick={props.canceled}
                >
                    Cancelar
                </Button>
            </div>
        </div>
    )
}