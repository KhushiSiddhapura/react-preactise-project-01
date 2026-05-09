const ProductCard = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
        <div>
            <img className="rounded-3xl h-50" src={props.image} alt="Image" />
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">{props.name}</p>
            <p className="text-xl font-semibold">{props.price}</p>
        </div>
    </div>
  )
}

export default ProductCard