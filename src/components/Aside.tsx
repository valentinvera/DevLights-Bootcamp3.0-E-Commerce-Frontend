const Aside = () => {
  return (
    <section className="flex gap-4">
      <aside className="flex flex-col pl-[120px]">
        <div className="pl mb-10 flex h-10 w-[223px] items-center justify-between bg-white px-3 py-2 shadow-[0_1px_15px_-1px_#626262]">
          <p className="text-sm font-normal text-black">Close to me</p>
          <button>boton</button>
        </div>

        <div className="mb-8 flex flex-col items-start gap-2">
          <h3 className="text-lg font-semibold">Category</h3>
          <button className="text-xs">Vehicle Accessories</button>
          <button className="text-xs">Beby</button>
          <button className="text-xs">computing</button>
          <button className="text-xs">Appliances and Air Ac.</button>
          <button className="text-xs">Herramientas</button>
          <button className="text-xs">Industries and Offices</button>
          <button className="text-xs">Jewelry and watches</button>
          <button className="text-xs">Games and toys</button>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">Price</h3>
          <p className="mb-2 text-xs">Products with price</p>

          <div className="flex gap-6">
            <input
              type="number"
              className="h-10 w-[101px] rounded-[4px] bg-white shadow-[0_1px_15px_-1px_#626262] placeholder:pl-2"
              placeholder="Min"
            />
            <input
              type="number"
              className="h-10 w-[101px] rounded-[4px] bg-white shadow-[0_1px_15px_-1px_#626262] placeholder:pl-2"
              placeholder="Max"
            />
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Aside
