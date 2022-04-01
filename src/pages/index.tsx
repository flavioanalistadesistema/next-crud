import Table from "../components/Table"
import Layout from "../components/Layout";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import ClientRepository from "../core/ClientRepository";
import CollectionClient from "../backend/db/CollectionClient";

export default function Home() {

  const rep: ClientRepository = new CollectionClient()

  const [visible, setVisible] = useState<'form' | 'table'>('table')
  const [client, setClient] = useState<Client>(Client.emptyClient)
  const [clientAll, setClientAll] = useState<Client[]>([])
  

  function getAll() {
    rep.allClient().then(clientAll => {
      setClientAll(clientAll)
      setVisible('table')
    })
  }

  useEffect(getAll, [])

  function clientSelect(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function clientDelete(client: Client) {
    rep.delete(client)
    getAll()
  }

  function saveClient(client: Client) {
    rep.save(client)
    getAll()
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
              clients={clientAll}
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
