import React, { useEffect, useState } from 'react'

function DocTitleOne() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    },[count])

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>count = {count}</button>
    </div>
  )
}

export default DocTitleOne