import React from "react";

const Contact = () => {
  return (
    // parent
    <section
      id="contacts"
      className="relative flex bg-linear-to-t from-[#022318] to-black py-24 h-screen"
    >
      {/* container */}
      <div className="relative h-full mx-auto w-6xl">
        {/* wrapper */}
        <div className="flex flex-row content-center h-full gap-4 ">
          <div className="flex flex-row items-center justify-center w-full h-full">
            <h1 className="text-6xl leading-tight">
              Let&apos;s &nbsp;
              <span className="text-transparent bg-linear-to-r from-[#066b49] to-[#0bb37a] bg-clip-text animation font-semibold">
                talk business.
              </span>{" "}
              But you first.
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full mb-24 border border-gray-200/20 rounded-xl">
            <div className="flex items-start justify-center w-full gap-2">
              <form
                action=""
                className="flex flex-col gap-4"
              >
                <div className="flex justify-between w-full gap-4 px-4">
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-sm bg-gray-200/10"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-sm bg-gray-200/10"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex justify-between w-full gap-4 px-4">
                  <input
                    type="text"
                    placeholder="email"
                    className="w-full px-4 py-2 rounded-sm bg-gray-200/10"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
