import { useEffect, useState } from "react"

export default function HooksUseTableOrForm() {
    
    const [visible, setVisible] = useState<'form'|'table'>('table')
    const visibleForm = () => setVisible('form')
    const visibleTable = () => setVisible('table')
    
    return {
        visibleForm,
        visibleTable,
        validForm: visible === 'form',
        validTable: visible === 'table',
        setVisible,
        visible
    }

}