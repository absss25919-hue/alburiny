import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden w-full h-screen flex items-center justify-center px-8 text-center" id="home">
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 opacity-95" 
                 style={{
                     backgroundImage: 'linear-gradient(-45deg, #ff3b30, #ff6b00, #ff9500, #ffcc00, #ff3b30)',
                     backgroundSize: '400% 400%',
                     animation: 'gradientShift 15s ease infinite'
                 }}>
            </div>

            {/* Background image overlay */}
            <div 
                className="absolute inset-0 -z-10 opacity-15"
                style={{
                    backgroundImage: 'url(https://www.firexuae.com/files/main_slider/slide_02.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 -z-10">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/60"
                        style={{
                            width: `${8 + Math.random() * 6}px`,
                            height: `${8 + Math.random() * 6}px`,
                            left: `${10 + i * 15}%`,
                            bottom: 0,
                        }}
                        animate={{
                            y: [0, -1000],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
                    style={{ textShadow: '0 5px 30px rgba(0, 0, 0, 0.5)' }}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    AL BURINY SECURITY SYSTEM AND SAFETY
                </motion.h1>

                <motion.p 
                    className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto"
                    style={{ textShadow: '0 3px 10px rgba(0,0,0,0.4)' }}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Your Trusted Partner for Fire Alarms, Fire Fighting Equipment & Emergency Lighting Systems
                </motion.p>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <motion.a 
                        href="#contact" 
                        className="inline-block bg-white text-red-600 font-extrabold text-xl uppercase px-14 py-5 rounded-full border-3 border-white transition-all"
                        style={{ 
                            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                        }}
                        whileHover={{ 
                            y: -8,
                            scale: 1.08,
                            backgroundColor: '#ffcc00',
                            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get A Free Quote
                    </motion.a>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
}