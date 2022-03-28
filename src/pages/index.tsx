import Table from "../components/Table"
import Layout from "../components/Layout";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<'form' | 'table'>('table')
  const [client, setClient] = useState<Client>(Client.emptyClient)
  const clients = [
    new Client('Flavio', 43, '1'),
    new Client('Luciana', 43, '2'),
    new Client('Gabriel', 9, '3'),
    new Client('Anna', 5, '4')
  ]

  function clientSelect(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function clientDelete(client: Client) {
    console.log(`Exluir----${client.id}`);

  }

  function saveClient(client: Client) {
    setClient(client)
    setVisible('table')
  }

  function newClient() {
    setClient(Client.emptyClient)
    setVisible('form') 
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className={`flex justify-end`}>
              <Button 
                onClick={() => newClient()}
                color="green" 
                className="mb-4">
                Novo Cadastro
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelect={clientSelect}
              clientDelete={clientDelete}
            ></Table>
          </>
        ) : (
          <Form 
            client={client} 
            alterClient={saveClient}
            canceled={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  )
}
