import Table from "../components/Table"
import Layout from "../components/Layout";
import Client from "../core/Client";
import Button from "../components/Button";

export default function Home() {
  const clients = [
    new Client('Flavio', 43, '1'),
    new Client('Luciana', 43, '2'),
    new Client('Gabriel', 9, '3'),
    new Client('Anna', 5, '4')
  ]

  function clientSelect(client: Client) {
    console.log(client.name)
  }

  function clientDelete(client: Client) {
    console.log(`Exluir----${client.id}`);

  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className={`flex justify-end`}>
          <Button color="green" className="mb-4">Novo Cadastro</Button>
        </div>
        <Table
          clients={clients}
          clientSelect={clientSelect}
          clientDelete={clientDelete}
        ></Table>
      </Layout>
    </div>
  )
}
