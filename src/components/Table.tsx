import Client from "../core/Client"

interface TableProps {
    clients: Client[];
}

export default function Table(props: TableProps) {
    function renderHead() {
        return (
            <tr className="w-screen">
                <th className="p-4 text-left">Id</th>
                <th className="p-4 text-left">Nome</th>
                <th className="p-4 text-left">Idade</th>
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
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
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