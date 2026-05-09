import ProductCard from "./ProductCard"

const ProductList = () => {
    const products=[
        {
            image: "https://thumbs.dreamstime.com/b/fresh-organic-tomatoes-weaved-basket-black-background-copy-space-text-fresh-organic-tomatoes-weaved-basket-159599577.jpg",
            name: "Fresh Tomatoes",
            price: "$12.99",
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2024/10/460195818/MZ/YJ/ET/36031355/natural-honey-500x500.jpg",
            name: "Pure Honey",
            price: "$18.50",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3Mp4EqLdbIIeeharTBJZFixwmztT3mqQjQ&s",
            name: "Green Broccoli",
            price: "$9.99",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3fdpLuEuQcrMp09wOS-ReL7nI1GkULx_4A&s",
            name: "Organic Nuts",
            price: "$15.75",
        },
    ]
  return (
    <div className="grid grid-cols-4 gap-10 p-20">
        {products.map(function(promps,idx){
           return <ProductCard key={idx} name={promps.name} image={promps.image} price={promps.price} />
        })}
    </div>
  )
}

export default ProductList