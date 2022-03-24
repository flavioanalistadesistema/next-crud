export default function Title(props) {
    return (
        <div className={`
            flex flex-col justify-center
        `}>
            <h1 className={`p-5 py-3 text-2xl`}>
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500"/>
        </div>
    )
}