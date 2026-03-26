import { useReveal } from '../hooks/useReveal'

const EDU = [
  { degree:'B.Tech — Computer Science & Engineering', school:'Lovely Professional University', loc:'Phagwara, Punjab', period:'Aug 2023 – Present', score:'9.29 CGPA', icon:'🎓', highlight:true },
  { degree:'Intermediate (Class XII)', school:'Sri Guru Harkrishan Public School', loc:'Pathankot, Punjab', period:'2022 – 2023', score:'93.4%', icon:'📘', highlight:false },
  { degree:'Matriculation (Class X)', school:'Sri Guru Harkrishan Public School', loc:'Pathankot, Punjab', period:'2020 – 2021', score:'93%', icon:'📗', highlight:false },
]

export default function About() {
  const hRef    = useReveal('sr', 0)
  const photoRef= useReveal('sr-l', 100)
  const infoRef = useReveal('sr-l', 180)
  const bioRef  = useReveal('sr-r', 100)
  const eduRef  = useReveal('sr-r', 180)

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div ref={hRef} className="sr flex flex-wrap items-end justify-between gap-4 mb-12 pb-6 border-b border-white/[0.08]">
          <div className="flex items-baseline gap-5">
            <span className="font-serif italic text-[#5A554F]/30 text-6xl md:text-8xl font-bold leading-none select-none">04</span>
            <div>
              <p className="font-mono text-[#C8A84B] text-xs tracking-[0.18em] uppercase mb-1">Background</p>
              <h2 className="font-serif italic font-bold text-3xl md:text-5xl text-[#F0EBE3] tracking-tight">About Me</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <div ref={photoRef} className="sr-l relative">
              <div className="w-full aspect-[3/4] max-w-[260px] mx-auto md:mx-0 rounded-2xl overflow-hidden bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center">
                {/* Replace with:  */}
                <div className="flex flex-col items-center gap-3">
                  <img src="/Gaurav.jpeg" alt="Gaurav Kumar" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-[calc(100%)] max-w-[260px] h-[calc(100%)] border border-[#C8A84B]/15 rounded-2xl -z-10 mx-auto md:mx-0" />
            </div>

            <div ref={infoRef} className="sr-l border border-white/[0.08] rounded-2xl overflow-hidden">
              {[
                { k:'Email',    v:'singharshpreet9460@gmail.com', href:'mailto:singharshpreet9460@gmail.com' },
                { k:'Phone',    v:'+91 7508353653' },
                { k:'Location', v:'Phagwara, Punjab' },
                { k:'GitHub',   v:'Arshpreet094',          href:'https://github.com/Arshpreet094' },
                { k:'LinkedIn', v:'in/arshpreet094',   href:'https://www.linkedin.com/in/arshpreet094' },
              ].map(r=>(
                <div key={r.k} className="flex justify-between items-center gap-2 px-4 py-3 border-b border-white/[0.06] last:border-0 flex-wrap">
                  <span className="font-mono text-[#5A554F] text-xs tracking-widest uppercase flex-shrink-0">{r.k}</span>
                  {r.href
                    ? <a href={r.href} target={r.href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                        className="text-[#C8A84B] text-xs font-medium hover:opacity-75 transition-opacity text-right truncate max-w-[170px]">{r.v}</a>
                    : <span className="text-[#F0EBE3] text-xs font-medium text-right">{r.v}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-9">
            <div ref={bioRef} className="sr-r border-l-2 border-[#C8A84B] pl-6 py-1">
              <p className="font-serif italic text-xl md:text-2xl text-[#F0EBE3] leading-relaxed">
                "I build production-ready applications — not just demos — while studying full-time for my B.Tech at LPU."
              </p>
              <p className="text-[#8A8178] text-sm font-mono mt-3">— Arshpreet Singh, CSE '27</p>
            </div>

            <p className="text-[#8A8178] text-base md:text-lg leading-relaxed">
Enthusiastic and dedicated 3rd year Computer Science Engineering student specializing in Data 
Science. Strong foundation in Python, data analysis, and machine learning with hands-on 
experience in academic projects involving data preprocessing and visualization.             </p>

            {/* Education */}
            <div ref={eduRef} className="sr-r">
              <h3 className="font-serif italic font-bold text-xl text-[#F0EBE3] mb-5">Education</h3>
              <div className="relative">
                <div className="absolute left-5 top-5 bottom-5 w-px bg-white/[0.07]" />
                <div className="flex flex-col gap-0">
                  {EDU.map((e,i)=>(
                    <div key={i} className="relative flex gap-4 pb-5 last:pb-0 group">
                      <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center mt-0.5 transition-colors duration-300
                        ${e.highlight ? 'bg-[#C8A84B]/10 border-[#C8A84B]/40' : 'bg-[#1A1A1A] border-white/[0.1]'}`}>
                        <span className="text-base">{e.icon}</span>
                      </div>
                      <div className="flex-1 bg-[#111111] border border-white/[0.07] rounded-xl p-4 group-hover:border-white/[0.14] transition-colors duration-300">
                        <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                          <h4 className="text-[#F0EBE3] text-sm md:text-base font-semibold leading-snug">{e.degree}</h4>
                          <span className={`flex-shrink-0 font-mono text-xs font-bold px-2.5 py-1 rounded-md
                            ${e.highlight ? 'bg-[#C8A84B]/10 text-[#C8A84B]' : 'bg-white/[0.05] text-[#8A8178]'}`}>
                            {e.score}
                          </span>
                        </div>
                        <p className="text-[#8A8178] text-sm">{e.school} · {e.loc}</p>
                        <p className="text-[#5A554F] text-xs font-mono mt-1">{e.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft skills */}
            
          </div>
        </div>
      </div>
    </section>
  )
}
