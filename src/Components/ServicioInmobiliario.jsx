function ServicioInmobiliario() {
  const features = [
    {
      title: "Impuestos Inmobiliarios",
    },
    {
      title: "Libre deuda",
    },
    {
      title: "Y otros trámites generales",
    },
  ];

  return (
    <section id="inmobiliario" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gray-800 text-2xl font-semibold sm:text-3xl">
            Servicios como Asesora Inmobiliaria
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-2 mx-auto">
            {features.map((item, idx) => (
              <li key={idx} className="flex">
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
                  <h4 className="my-2 text-lg text-gray-800 font-semibold">
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

export default ServicioInmobiliario;
