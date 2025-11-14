import {
  MapPin,
  Phone,
  Mail,
  FileDown,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const socialItems = [
    {
      icon: <Globe color="rgb(0, 249, 246)" size={20} />,
      glow: "rgba(255,119,233,0.7)",
      link: "https://sdit.ac.in/",
    },
    {
      icon: <Instagram color="#ff77e9" size={20} />,
      glow: "rgba(255,119,233,0.7)",
      link: "https://www.instagram.com/sdit_mba_echelon25/",
    },
    {
      icon: <Facebook color="#6cb8ff" size={20} />,
      glow: "rgba(108,184,255,0.7)",
      link: "https://www.facebook.com/SDITMBA/",
    },
    {
      icon: <Linkedin color="#7dceff" size={20} />,
      glow: "rgba(125,206,255,0.7)",
      link: "https://www.linkedin.com/company/shree-devi-institute-of-technology-mba-department/",
    },
  ];

  return (
    <>
      <footer
        id="contact"
        className="w-full bg-[#0b0b15] text-white pt-12 pb-6 border-t border-white/10 relative"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* === COLLEGE DETAILS === */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#6dd5ff]">
              Shree Devi Institute of Technology
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Airport Road, Kenjar
              <br />
              Mangaluru – 574142, Karnataka
              <br />
              India
            </p>
            {/* === SOCIAL BAR (Horizontal) === */}
            <div
              className="
                mt-5
                w-fit
                flex items-center justify-start gap-4
                bg-[rgba(15,15,25,0.7)]
                border border-[rgba(255,255,255,0.15)]
                backdrop-blur-2xl
                px-4 py-3
                rounded-2xl
                shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_0_20px_rgba(0,255,255,0.1)]
                "
            >
              {socialItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 group"
                  style={{ color: item.icon.props.color }}
                >
                  <div
                    className="
                    flex items-center justify-center
                    w-10 h-10 rounded-full
                    bg-[rgba(255,255,255,0.05)]
                    border border-[rgba(255,255,255,0.1)]
                    transition-all duration-300
                    group-hover:scale-110
        "
                    style={{
                      boxShadow: `0 0 8px ${item.glow}`,
                    }}
                  >
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* === COORDINATORS === */}
          <div>
            <h3 className="text-lg font-semibold text-[#ffb3f6] mb-2">
              Faculty Coordinators
            </h3>
            <p className="text-gray-300 text-sm">
              Dr. Gayathri B J (HOD):{" "}
              <span className="text-white">9342124333</span>
              <br />
              Prof. Rachel Sweety:{" "}
              <span className="text-white">9663625195</span>
            </p>

            <h3 className="text-lg font-semibold text-[#a0ffab] mt-4 mb-2">
              Student Coordinators
            </h3>
            <p className="text-gray-300 text-sm">
              Mr. Krithik Salian: <span className="text-white">8138064946</span>
              <br />
              Mr. N S Raghavendra:{" "}
              <span className="text-white">8088813770</span>
            </p>

            <h3 className="text-lg font-semibold text-[#ffe28a] mt-4 mb-2">
              Registration Coordinators
            </h3>
            <p className="text-gray-300 text-sm">
              Manish P Poojary: <span className="text-white">7338334870</span>
              <br />
              Spoorthi S Poojary: <span className="text-white">6363279237</span>
            </p>
          </div>

          {/* === MAP + SOCIAL + BROCHURE === */}
          <div className="flex flex-col gap-4">
            {/* GOOGLE MAP */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4500.404351165538!2d74.86748094586497!3d12.952185850418031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350d45819abf1%3A0xec9cf13e2e0ad60c!2sShree%20Devi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1763091931362!5m2!1sen!2sin"
              width="100%"
              height="160"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl border border-white/10"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* BROCHURE BUTTON */}
            <a
              href="/ECHELON2025.pdf"
              download
              className="block text-center w-full px-5 py-2 bg-linear-to-r from-red-600 to-pink-500 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
            >
              📄 Download Brochure
            </a>
          </div>
        </div>

        {/* === FOOTER BOTTOM LINE === */}
        <div className="mt-10 text-center text-gray-400 text-sm border-t border-white/10 pt-4">
          © 2025 Echelon | SDIT MBA Department. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
