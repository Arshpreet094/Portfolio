export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-8 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-serif italic text-lg font-bold text-[#F0EBE3]">AP</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A84B]" />
          <span className="text-[#8A8178] text-sm">Arshpreet Singh</span>
        </div>
        <p className="text-[#5A554F] text-sm font-mono text-center">
          B.Tech CSE · LPU · Phagwara, Punjab · CGPA 9.29
        </p>
        <div className="flex items-center gap-5">
          {[
            { l:'GitHub',   h:'https://github.com/Arshpreet094' },
            { l:'LinkedIn', h:'https://www.linkedin.com/in/arshpreet094 ' },
            { l:'Email',    h:'mailto:singharshpreet9460@gmail.com' },
          ].map(s=>(
            <a key={s.l} href={s.h} target={s.h.startsWith('http')?'_blank':undefined} rel="noreferrer"
              className="text-[#8A8178] hover:text-[#C8A84B] text-sm font-medium transition-colors duration-200">
              {s.l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
