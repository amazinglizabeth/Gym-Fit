import React from "react";

const CustomerReviews = () => {
  return (
    <div className="px-6 py-8 bg-[#2b2252]">
      <h2 className=" text-3xl font-bold text-center pb-5 text-white">
        Customer Reviews
      </h2>
      <div className="reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Review 1 */}
        <div className="review bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "GymFit changed my life! The personalized approach and amazing
            trainers helped me achieve my fitness goals faster than I imagined."
          </p>
          <h4 className="text-lg font-semibold mt-4">- John Doe</h4>
        </div>

        {/* Review 2 */}
        <div className="review bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "The ambiance of the gym I recently visited was impeccable. As soon
            as I stepped in, I was greeted by a clean, well-lit space that
            exuded a sense of motivation. The layout was organized, with
            designated areas for different types of workouts."
          </p>
          <h4 className="text-lg font-semibold mt-4">- Sarah Smith</h4>
        </div>

        {/* Review 3 */}
        <div className="review bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "The gym boasted a wide range of high-quality equipment,What
            impressed me the most was the maintenance of the equipment;
            everything was in excellent working condition, clean, and
            well-maintained."
          </p>
          <h4 className="text-lg font-semibold mt-4">- Alex Johnson</h4>
        </div>

        {/* Review 4 */}
        <div className="review bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "The flexible membership options make it easy for me to fit GymFit
            into my busy schedule. I couldn't ask for a better fitness center!"
          </p>
          <h4 className="text-lg font-semibold mt-4">- Emily Brown</h4>
        </div>

        {/* Review 5 */}
        <div className="review bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "One of the standout features of this gym was its exceptional
            customer service. They took the time to understand my fitness goals
            and provided personalized recommendations on classes and routines."
          </p>
          <h4 className="text-lg font-semibold mt-4">- Michael Green</h4>
        </div>

        {/* Review 6 */}
        <div className="review bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "Their expertise was evident as they provided valuable guidance,
            corrected techniques, and motivated everyone to push their limits
            safely. Their personalized approach made me feel confident in my
            workouts."
          </p>
          <h4 className="text-lg font-semibold mt-4">- Sophia Lee</h4>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
