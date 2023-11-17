import Button from "../components/button"

interface CardProperties {
  img: string
}

const Card: React.FC<CardProperties> = ({ img }) => {
  return (
    <div className="w-full flex flex-col gap-y-[3.75rem] px-5 py-10 justify-center items-center border border-primary-1 rounded-[0.75rem] lg:px-10">
      <p className="button-lg text-neutral-3">mempo</p>
      <div className="flex flex-col gap-y-10 justify-center items-center">
        <div className="flex flex-col gap-y-5 justify-center items-center">
          <img src={img} alt="mask picture" />
          <p className="price text-neutral-2">0.00 €</p>
        </div>
        <div className="flex flex-col gap-y-5 justify-center items-start w-[20rem] lg:items-center">
          <p className="body-sm text-neutral-2">The mempo mask, with its delicate curves and ancient patina, evokes the delectable promise of a visual experience</p>
          <Button value="buy" variant="default" className="lg:w-fit"/>
        </div>
      </div>
    </div>
  )
}

export default Card