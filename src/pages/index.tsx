import Table from "../components/Table"
import Layout from "../components/Layout";
import Client from "../core/Client";

export default function Home() {
    const clients = [ 
      new Client('Flavio', 43, '1'),
      new Client('Luciana', 43, '2'),
      new Client('Gabriel', 9, '3'),
      new Client('Anna', 5, '4')
    ]
  
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
        <Layout title="Cadastro Simples ">
          <Table clients={clients}></Table>
        </Layout>
    </div>
  )
}
