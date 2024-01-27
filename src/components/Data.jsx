import React, {useEffect, useState} from "react";

const Data = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData () {
            const data = await fetch('https://api-product-morty.vercel.app/characters')
                .then(res => res.json())
            setData(data)
        }
        getData()
    }, []);
    
    return (
        <div>
            <ul>
                {
                    data.map((result) => (
                        <section>
                            <li key={result.id}>{result.name}</li>
                            <img key={result.id} src={result.image}/>
                        </section>
                    ))
                }
            </ul>
        </div>
    )
}

export default Data