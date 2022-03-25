import Client from "../core/Client"

interface TableProps {
    clients: Client[];
}

export default function Table(props: TableProps) {
    function renderHead() {
        return (
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderClients() {
        return props.clients?.map((clients, i) => {
            return (
                <tr>
                    <td>{clients.id}</td>
                    <td>{clients.name}</td>
                    <td>{clients.age}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                {renderHead()}
            </thead>
            <tbody>
                {renderClients()}
            </tbody>
        </table>
    )
}