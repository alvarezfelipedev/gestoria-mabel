function ServicioGeneral() {
    const features = [
        {
          title: "Certificado de Partida de Nacimiento",
        },
        {
          title: "Certificado de CUIT",
        },
        {
          title: "Certificado de Matrimonio",
        },
        {
          title: "Pensión",
        },
      ];
    
      return (
        <section id="general" className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
            <div className="max-w-2xl mx-auto">
                <h3 className="text-indigo-600 font-semibold">Servicios</h3>
              <h3 className="text-gray-800 text-2xl font-semibold sm:text-3xl">
                Servicios Generales
              </h3>
            </div>
            <div className="mt-12">
              <ul className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-2 mx-auto">
                {features.map((item, idx) => (
                  <li key={idx} className="lg:flex lg:mx-16 lg:items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <div className="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <h4 className="my-2 text-lg text-gray-800 font-semibold lg:text-center">
                        {item.title}
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      );
}

export default ServicioGeneral;