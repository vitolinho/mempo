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
        <div className="flex flex-col gap-y-5 justify-center items-start w-[20rem]">
          <p className="body-sm text-neutral-2">The mempo mask, with its delicate curves and ancient patina, evokes the delectable promise of a visual experience</p>
          <div className="w-full flex justify-center">
            <div className="w-full flex flex-row justify-center items-center px-8 py-3 bg-primary-1 cursor-pointer hover:bg-primary-0 lg:w-fit">
              <p className="button-sm text-neutral-0">buy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card