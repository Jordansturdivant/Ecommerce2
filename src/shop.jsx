import { useEffect, useState } from "react";


function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error))
    }, [])

    function showProducts(products) {
        return (
            <div>
                {products.map((product, index) => (
                    <div key={index} className="ItemCard">
                        <div>
                            <h2>{product.Name}</h2>
                        </div>
                ))}
            </div>
        )


    }
    return (
        <main>
            {showProducts(products)}
        </main>
    )

}