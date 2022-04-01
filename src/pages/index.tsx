import Table from "../components/Table"
import Layout from "../components/Layout";
import Button from "../components/Button";
import Form from "../components/Form";
import hooksUseClient from "../backend/hooks/hooksUseClient";

export default function Home() {

  const {
    newClient,
    visibleTable, 
    validTable,
    saveClient,
    clientSelect,
    clientDelete,
    clientAll,
    client
  } = hooksUseClient()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {validTable ? (
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
            canceled={() => visibleTable()}
          />
        )}
      </Layout>
    </div>
  )
}
