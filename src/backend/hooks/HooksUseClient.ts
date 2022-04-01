import { useEffect, useState } from "react"
import Client from "../../core/Client"
import ClientRepository from "../../core/ClientRepository"
import CollectionClient from "../db/CollectionClient"
import HooksUseTableOrForm from "./HooksUseTableOrForm"

export default function HooksUseClient() {
    
    const rep: ClientRepository = new CollectionClient()
    const {
        visibleForm,
        visibleTable,
        validTable,
    } = HooksUseTableOrForm()

    const [client, setClient] = useState<Client>(Client.emptyClient)
    const [clientAll, setClientAll] = useState<Client[]>([])


    function getAll() {
        rep.allClient().then(clientAll => {
            setClientAll(clientAll)
            visibleTable()
        })
    }

    useEffect(getAll, [])

    function clientSelect(client: Client) {
        setClient(client)
        visibleForm()
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
        visibleForm()
    }

    return {
        newClient,
        visibleTable, 
        validTable,
        saveClient,
        clientSelect,
        clientDelete,
        clientAll,
        client
    }
}