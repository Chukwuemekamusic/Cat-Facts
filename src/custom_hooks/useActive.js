import { useState } from 'react'

const useActive = () => {
    const [isActive, setActive] = useState('')

    const handleClick = (buttonName) => {
        setActive(buttonName)
    }
    const activeClass = (buttonName) => { return isActive === buttonName  ? "btn btn-primary" : "" }

    return [ handleClick, activeClass]
}

export default useActive