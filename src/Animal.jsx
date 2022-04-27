function Animal({ type, name, age }) {
    return(
        <li>
            {type} {name} ({age} years old)
        </li>
    )
}

export default Animal