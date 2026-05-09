import TextL from "./TextL"

const CardL = () => {
  return (
    <div className="bg-green-100 h-90 flex items-center justify-between w-140 rounded-3xl p-8 shadow-2xl shadow-green-950">
        <img src="https://png.pngtree.com/png-vector/20230930/ourmid/pngtree-avocado-png-avocado-fruit-ai-generated-png-image_10153887.png" alt="Image" className="h-40" />
        <TextL />
    </div>
  )
}

export default CardL