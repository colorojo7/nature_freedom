const SectionWhoFor = () => {
  return (
    <div className="bg-brand-7 py-5 lg:p-10">
      <div className="flex flex-col lg:flex-row  justify-center">
        <div className="lg:w-1/2 lg:p-4">
          <h2 className="text-4xl lg:text-4xl text-center font-bold text-brand-1 pt-5 lg:pt-10 pb-4 font-crimson uppercase">
            Who is it for?
          </h2>
          <p className="text-xl lg:text-2xl font-semibold text-center text-brand-3 px-4 lg:px-20  font-crimson max-w-4xl mx-auto">
            <ul className="text-start list-disc pl-8">
              <li>⁠NDIS participants (self- or plan-managed)</li>
              <li>⁠People facing mental health challenges</li>
              <li>
                ⁠Anyone ready to reconnect with themselves, others, and the
                living world
              </li>
              <li>
                ⁠Individuals seeking a break from technology and daily stressors
              </li>
            </ul>
          </p>
        </div>

        <div className="lg:w-1/2 lg:p-4">
          <h2 className="text-4xl lg:text-4xl text-center font-bold text-brand-1 pt-5 lg:pt-10 pb-4 font-crimson uppercase">
            What to expect?
          </h2>
          <p className="text-xl lg:text-2xl font-semibold text-center text-brand-3 px-4 lg:px-20 pb-10 font-crimson max-w-4xl mx-auto">
            <ul className="text-start list-disc pl-8">
              <li>⁠4–6 hour experiences tailored to individual needs</li>
              <li>⁠Guided time in nature</li>
              <li>⁠Feldenkrais Awareness Through Movement</li>
              <li>⁠Rest, journaling, reflection</li>
              <li>⁠Optional: Swimming, hiking, surfing, bushwalks</li>
              <li>⁠Shared meals and meaningful conversation</li>
            </ul>
          </p>
        </div>
      </div>
        <div className="flex justify-center pt-4">
                
                <a
                href="#contact"
                className="bg-brand-8 border-2 border-brand-3 text-white px-6 py-3 rounded-full hover:bg-brand-2 transition-colors uppercase font-nunito font-bold lg:text-lg"
                >

                download full program overview
                </a>
            </div>
    </div>
  );
};

export default SectionWhoFor;


