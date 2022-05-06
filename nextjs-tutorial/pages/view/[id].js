import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import Item from '../../src/component/Item'
import { Loader } from 'semantic-ui-react'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  console.log(id)
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log('data', res.data)
      setItem(res.data)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    if (id && id > 0) {
      getData()
    }
  },[id])

  return (
    <>
    {isLoading && (
        <div style={{padding : '300px 0'}}>
            <Loader inline = "centered" active >
              Loading
            </Loader>
        </div>
      )}
  {
    !isLoading && (
  <Item item = {item}/>
    )}
   </>
  )
}

export default Post
