export default function QuoteSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-800 to-navy-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-islamic-green-900/20 via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <blockquote className="text-2xl md:text-4xl font-light leading-relaxed mb-8 text-slate-200">
          "My Lord! Forgive me and have mercy, for You are The Most Merciful."
        </blockquote>
        <cite className="text-lg gradient-text font-semibold">— The Quran 23:118</cite>
      </div>
    </section>
  );
}
