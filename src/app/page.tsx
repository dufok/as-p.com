import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="fixed font-Interstate text-black top-0 left-0 right-0 z-50 flex justify-center space-x-4 p-4">
        <button className="focus:outline-none">Home</button>
        <button className="focus:outline-none">About Us</button>
        <button className="focus:outline-none">Projects</button>
        <button className="focus:outline-none">Contact</button>
      </div>
      <main className="flex h-screen w-full items-center justify-center relative">
        <div className="flex flex-col items-left justify-center">
          <Image src="/Logo.svg" alt="Logo" width={670} height={274} className="px-75"/>
          <p className="text-51 font-Interstate text-black mt-18">Set Stage Light design</p>
          <div className="flex items-center space-x-2 mt-16 mt-20">
            <p className="text-24 font-Interstate text-black pr-3">contact us</p>
            <a href="mailto:hello@asáp.com" className="text-24 font-Interstate text-black underline">hello@asáp.com</a>
          </div>
        </div>
        {/* <div className="gradient-circle"></div> */}
      </main>
    </div>
  )
}