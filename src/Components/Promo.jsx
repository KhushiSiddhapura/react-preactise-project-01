import CardL from "./PromoComponents/CardL"
import CardR from "./PromoComponents/CardR"

const Promo = () => {
  return (
    <div className="flex px-30 pb-20 justify-around items-center gap-15">
        <CardL />
        <CardR />
    </div>
  )
}

export default Promo