import Client from "../core/Client"
import { IconPencilAlt, IconTash } from "./Icon";

interface TableProps {
    clients: Client[];
    clientSelect?: (clients: Client) => void;
    clientDelete?: (clients: Client) => void;
}

export default function Table(props: TableProps) {

    const viewActions = props.clientSelect || props.clientDelete

    function renderHead() {
        return (
            <tr className="w-screen">
                <th className="p-4 text-left">Id</th>
                <th className="p-4 text-left">Nome</th>
                <th className="p-4 text-left">Idade</th>
                {viewActions ? <th className="p-4">Ação</th> : false}
            </tr>
        )
    }

    function renderClients() {
        return props.clients?.map((clients, i) => {
            return (
                <tr key={clients.id} className={i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}>
                    <td className="p-4 text-left">{clients.id}</td>
                    <td className="p-4 text-left">{clients.name}</td>
                    <td className="p-4 text-left">{clients.age}</td>
                    {viewActions ? renderActions(clients) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className={`
                flex justify-center items-center
            `}>
                {props.clientSelect ? (
                    <button onClick={() => props.clientSelect?.(client)} className={`
                        flex justify-center items-center
                        text-green-600 p-2 m-1 rounded-full hover:bg-purple-50
                    `}>
                        {IconPencilAlt}
                    </button>
                ) : false}

                {props.clientDelete ? (
                    <button onClick={() => props.clientDelete?.(client)} className={`
                    flex justify-center items-center
                    text-red-600 p-2 m-1 rounded-full hover:bg-purple-50
                `}>
                        {IconTash}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-blue-500 to-purple-800
                text-gray-200 
            `}>
                {renderHead()}
            </thead>
            <tbody>
                {renderClients()}
            </tbody>
        </table>
    )
}