const Footer = () => {
  return (
    <div className="bg-green-800 text-white flex items-center justify-around gap-10 p-5">
        <div className="flex flex-col gap-5 w-[20%]">
            <p className="text-2xl font-semibold">About US</p>
            <p className="text-justify">We provide fresh and organic food products with the highest quality and care. Please do visit our website and offline stores across India.</p>
        </div>
        <div className="flex flex-col gap-5">
            <p className="text-2xl font-semibold">Quick Links</p>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="flex flex-col gap-5">
            <p className="text-2xl font-semibold">Follow Us</p>
            <div className="flex gap-5">
            <img src="https://img.icons8.com/?size=100&id=435&format=png&color=000000" alt="Image" className="h-10" />
            <img src="https://img.icons8.com/?size=100&id=437&format=png&color=000000" alt="Image" className="h-10" />
            <img src="https://img.icons8.com/?size=100&id=16712&format=png&color=000000" alt="Image" className="h-10"/>
            </div>
        </div>
    </div>
  )
}

export default Footer