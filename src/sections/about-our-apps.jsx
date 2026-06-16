import { motion } from "framer-motion";

export default function AboutOurApps() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#fff5eb] via-[#ffe4cc] to-[#ffd4a3] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <h2 className="relative text-center text-[3.2rem] font-extrabold mb-20
          bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400
          bg-[length:200%_auto] bg-clip-text text-transparent
          animate-[shimmer_3s_linear_infinite]
        ">
          About Us

          {/* underline */}
          <span className="absolute left-1/2 -bottom-6 -translate-x-1/2
            w-36 h-[6px] rounded-full
            bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400
            shadow-[0_0_30px_rgba(255,107,0,0.6)]
          " />
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Text */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-[2.3rem] font-bold text-red-600 mb-7">
              Protecting Lives and Properties
            </h3>

            <div className="space-y-6 text-[#555] text-[1.05rem] leading-[1.9] text-justify">
              <p>
                AL BURINY SECURITY SYSTEM AND SAFETY is a leading supplier of
                comprehensive fire safety solutions in the region. We specialize
                in providing high-quality fire alarm systems, fire fighting
                equipment, and emergency lighting systems to ensure the safety
                and security of your facilities.
              </p>

              <p>
                With years of experience serving building contractors, facility
                managers, businesses, and government entities, we have built a
                reputation for reliability, quality, and professional service.
                Our team of experts is committed to delivering tailored solutions
                that meet international safety standards and local regulations.
              </p>

              <p>
                We understand that fire safety is not just about
                compliance—it's about protecting lives, assets, and business
                continuity. That's why we partner with leading manufacturers to
                bring you the most advanced and reliable fire safety equipment
                available in the market.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.img
              src="https://www.firexuae.com/files/main_slider/slide_01.jpg"
              alt="Fire Safety Equipment"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="rounded-[30px]
                shadow-[0_25px_80px_rgba(255,59,48,0.3)]
                max-w-full
              "
            />
          </motion.div>

        </div>
      </div>

      {/* shimmer animation */}
      <style>
        {`
          @keyframes shimmer {
            to {
              background-position: 200% center;
            }
          }
        `}
      </style>
    </section>
  );
}
