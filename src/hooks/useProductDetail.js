import { useEffect, useState } from "react"

const useProductDetail = (inventoryId) => {
    const [detail,setDetail] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${inventoryId}`)
            .then(res => res.json())
            .then(data => {
                setDetail(data)
            })
    }, [inventoryId])
    return [detail,setDetail]
}

export default useProductDetail;