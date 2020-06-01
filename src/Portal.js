import React,{useState} from 'react'

function Portal() {
    const [count, setCount] = useState(initialState)
    return (
        <div>
            {count}
            <button onChange={(e)=>e.target.value}>Click</button>
        </div>
    )
}

export default Portal
