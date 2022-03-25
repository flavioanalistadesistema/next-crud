interface buttonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Button(props: buttonProps) {

    const color = props.color ?? 'gray';    

    return (
        <button className={`
            bg-gradient-to-r from-${color}-300 to-${color}-700
            text-white p-2 m-1 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}