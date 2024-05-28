import React, { useEffect, useState } from "react";

const Data = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            const data = await fetch(process.env.API_PRODUCT_MORTY)
                .then(res => res.json())
            setData(data)
        }
        getData()
    }, []);

    return (
        <div>
            <ul>
                {
                    data.map((result) => (
                        <section>
                            <li key={result.id}>{result.name}</li>
                            <div className="w-[200px] h-[200px]">
                                <img className="w-[200px] h-[200px]" loading="lazy" key={result.id} src={result.image} alt={`img${result.id}`} />
                            </div>
                        </section>
                    ))
                }
            </ul>
        </div>
    )
}

export default Data