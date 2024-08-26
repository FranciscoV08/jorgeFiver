
// Iconos
import { IoBusinessOutline, 
  IoAddCircleOutline, 
  IoClipboardOutline, 
  IoKeyOutline, 
  IoTicketOutline, 
  IoPersonAddOutline, 
  IoPeopleOutline, 
  IoHomeOutline, 
  IoCopyOutline, 
  IoNewspaperOutline,
  IoCashOutline,
  IoCellularOutline 
} from "react-icons/io5";

function App() {

  return (
    <>
      <div>
        <h1 className='text-2xl my-5 text-zinc-500 underline'>Bienvenido, Jorge!</h1>
        <div className=' flex flex-col md:flex-row gap-5 flex-wrap justify-center'>

          <div className=" flex items-center justify-center">
            <div className="relative flex w-full h-[20rem] max-w-[45rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-2/6 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                  src="https://pedragonzalezyciasa.com.ar/wp-content/themes/neve-fse/assets/img/neve-fse-img05.jpg"
                  alt="image"
                  className="h-full w-full object-cover"
                />
                <div className=' absolute text-black py-5 inset-0 text-center'>
                  <p className='text-xl shadow-black underline'>PROPIEDADES</p>
                </div>
              </div>
              <div className="p-6">
                {/* <h2 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-black antialiased">
                            Propiedades
                        </h2> */}
                <div className='flex flex-wrap '>
                  <a className="inline-block " href="#">

                    <IoBusinessOutline className='m-auto' size={45} />

                    <button
                      className=" flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Nuevo Proyecto

                    </button>
                  </a>
                  <a className="inline-block" href="#">
                    <IoAddCircleOutline className='m-auto' size={45} />
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Ingreso Pid
                    </button>
                  </a>
                  <a className="inline-block" href="#">
                    <IoClipboardOutline className='m-auto' size={45} />
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Listado Propiedades
                    </button>
                  </a>
                  <a className="inline-block" href="#">
                    <IoTicketOutline className='m-auto' size={45} />
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Ingresar Promocion
                    </button>
                  </a>
                  <a className="inline-block" href="#">
                    <IoKeyOutline className='m-auto' size={45} />
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black-500 transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Cambio Estado
                    </button>
                  </a>
                </div>
              </div>
            </div>


          </div>
          {/* ---- */}
          <div className=" flex items-center justify-center">
            <div className="relative flex w-full h-[20rem] max-w-[45rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-2/6 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                  src="https://designthinking.gal/wp-content/uploads/2017/05/personas.jpg"
                  alt="image"
                  className="h-full w-full object-cover"
                />
                <div className='   text-white py-5 text-center'>
                  <p className='top-[16rem] left-1/2 transform -translate-x-1/2 absolute text-xl shadow-white underline'>PERSONAS</p>
                </div>
              </div>
              <div className="p-6">
                {/* <h2 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-black antialiased">
                    Propiedades
                </h2> */}
                <div className='flex flex-wrap '>
                  <a className="inline-block " href="#">

                    <IoPersonAddOutline className='m-auto' size={45} />

                    <button
                      className=" flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Nueva Personas

                    </button>
                  </a>
                  <a className="inline-block" href="#">
                    <IoPeopleOutline className='m-auto' size={45} />
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Listado Propietarios
                    </button>
                  </a>
                  <a className="inline-block" href="#">
                    <IoHomeOutline className='m-auto' size={45} />
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Cuenta Bancarias
                    </button>
                  </a>
                </div>
              </div>
            </div>


          </div>
          {/* ---- */}
          <div className=" flex items-center justify-center">
            <div className="relative flex  h-[20rem] w-[45rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-2/6 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                  src="https://www.equiposytalento.com/contenido/noticias/0528grafologia802.jpg"
                  alt="image"
                  className="h-full w-full object-cover"
                />
                <div className=' absolute text-black py-5 inset-1 text-center'>
                  <p className='text-xl  underline '>CONTRATOS</p>
                </div>
              </div>
              <div className="p-6">
                <div className='flex flex-wrap '>
                  <a className="inline-block " href="#">

                    <IoClipboardOutline className='m-auto' size={45} />
                    <button
                      className=" flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Listado Contratos

                    </button>
                  </a>
                  <a className="inline-block" href="#">
                    <IoCopyOutline className='m-auto' size={45} />
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Nuevo Contrato
                    </button>
                  </a>
                </div>
              </div>
            </div>


          </div>
          {/*  */}
          <div className=" flex items-center justify-center">
            <div className="relative flex  h-[20rem] w-[45rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-2/6 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                  src="https://lanservicios.com/wp-content/uploads/Lan-Servicios-Asesoria-contable-1.jpg"
                  alt="image"
                  className="h-full w-full object-cover"
                />
                <div className=' text-black py-5 inset-1 text-center'>
                  <p className='top-[16rem] left-1/2 transform -translate-x-1/2 absolute text-xl shadow-white underline '>ESTADO DE CUENTA</p>
                </div>
              </div>
              <div className="p-6">
                <div className='flex flex-wrap '>
                  <a className="inline-block " href="#">

                    <IoCellularOutline  className='m-auto' size={45} />
                    <button
                      className=" flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Estado de Cuentas

                    </button>
                  </a>
                  <a className="inline-block" href="#">
                    <IoCashOutline className='m-auto' size={45} />
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Ingreso Gastos
                    </button>
                  </a>
                  <a className="inline-block" href="#">
                    <IoNewspaperOutline className='m-auto' size={45} />
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-black transition-all  disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Ingreso Masivo
                    </button>
                  </a>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default App
