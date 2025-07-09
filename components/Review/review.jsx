import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section className="bg-[#0F172A] text-white py-[100px] px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Join the growing community of coaching centers transforming their operations
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto bg-[#2C3447] text-slate-100 rounded-xl p-8 shadow-lg border border-slate-700">
        <FaQuoteLeft className="text-4xl text-blue-500 mb-4" />
        <p className="text-xl italic leading-relaxed">
          "NSPhysics transformed how we manage our coaching center. The seamless enrollment process, attendance tracking, and financial reporting save us hours every day, allowing us to focus on what matters most – teaching our students."
        </p>

        <div className="flex items-center gap-4 mt-8">
          <div className="bg-emerald-500 w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold">
            NS
          </div>
          <div>
            <p className="text-lg font-semibold">Noor Sir</p>
            <p className="text-slate-400 text-sm">Founder, Noor Sir Physics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
