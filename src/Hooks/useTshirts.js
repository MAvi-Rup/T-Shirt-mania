import { useEffect, useState } from "react"

const useTshirts =()=>{
    const [tshirts, setShirt]=useState([])
    useEffect(()=>{
        fetch('tshirt.json')
        .then(res=> res.json())
        .then(data => setShirt(data))

    },[])
    return [tshirts,setShirt]
}

export default useTshirts;