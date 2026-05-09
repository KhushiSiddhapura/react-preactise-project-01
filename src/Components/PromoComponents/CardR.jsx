import TextR from "./TextR"

const CardR = () => {
  return (
    <div className="bg-mauve-100 flex items-center justify-between rounded-3xl p-8 h-90 w-140 shadow-2xl shadow-mauve-950">
        <TextR />
        <img src="https://static.vecteezy.com/system/resources/thumbnails/044/813/725/small/cocoa-powder-in-wooden-bowl-isolated-on-transparent-background-png.png" alt="Image" className="h-50" />
    </div>
  )
}

export default CardR