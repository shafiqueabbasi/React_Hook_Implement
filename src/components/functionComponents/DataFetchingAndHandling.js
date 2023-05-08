import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchingAndHandling() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('Some thing went Wrong')
        })
    },[])


  return (
    <div>
        { loading ? 'Loading' :post.title }
        { error ? error : null }
    </div>
  )
}

export default DataFetchingAndHandling