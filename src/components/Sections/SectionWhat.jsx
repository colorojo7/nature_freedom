import React from "react";

const SectionWhat = () => {
  return (
    <div className="bg-brand-9 lg:p-10">
      <div>
        <h2 className="text-4xl lg:text-5xl text-center font-bold text-brand-1 pt-10 pb-4 font-crimson uppercase">
          What are nature freedom days?
        </h2>
        <p className="text-2xl lg:text-3xl font-semibold text-center text-brand-3 px-4 lg:px-20 pb-5 lg:pb-10 font-crimson max-w-4xl mx-auto">
          Nature-based wellness experiences designed for people seeking relief
          from stress, anxiety and disconnection
          {/* Nature Freedom Days are immersive experiences designed to promote mental health and well-being through nature-based activities. Participants engage in a variety of outdoor activities such as hiking, biking, surfing, and more, all while disconnecting from technology and reconnecting with nature. These days are structured to provide a holistic approach to mental health care, emphasizing the therapeutic benefits of being outdoors. */}
        </p>
      </div>
     
      <div className="flex lg:flex-row flex-wrap items-center justify-around p-4 lg:p-10 text-center ">
        <div className="w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
          <img src="images/whatAre/bike.png" className="max-h-52" />
          <p className="text-2xl font-semibold text-brand-3 font-crimson max-w-52 pt-3">Mountain-bike and hike</p>
        </div>
        <div className="w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
          <img src="images/whatAre/walk.png" className="max-h-52" />
          <p className="text-2xl font-semibold text-brand-3 font-crimson max-w-52 pt-3">Narrative therapy walks</p>
        </div>
        <div className="w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
          <img src="images/whatAre/noreception.png" className="max-h-52" />
          <p className="text-2xl font-semibold text-brand-3 font-crimson max-w-52 pt-3">Phone detox & meditation day</p>
        </div>
        <div className="w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
          <img src="images/whatAre/surf.png" className="max-h-52" />
          <p className="text-2xl font-semibold text-brand-3 font-crimson max-w-52 pt-3">Ocean moves</p>
        </div>
      </div>
    </div>
  );
};

export default SectionWhat;
