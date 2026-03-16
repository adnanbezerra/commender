import Image from "next/image";

const features = [
    {
        eyebrow: "01",
        title: "Grupos privados",
        description:
            "Compartilhe livros, filmes e achados culturais com pessoas que realmente importam para você.",
        tone: "bg-[#ffe4d7] text-[#8b4522]",
    },
    {
        eyebrow: "02",
        title: "Descoberta pública",
        description:
            "Explore coleções abertas e encontre curadorias com mais voz humana e menos algoritmo.",
        tone: "bg-[#d9f0e2] text-[#496c57]",
    },
    {
        eyebrow: "03",
        title: "Estética editorial",
        description:
            "Uma experiência calorosa, pensada para deixar cada recomendação com cara de destaque.",
        tone: "bg-[#dce6ff] text-[#536488]",
    },
];

const recommendations = [
    {
        author: "Elena Rossi",
        group: "Cinema Club",
        title: "La Grande Bellezza",
        type: "Filme",
        likes: 24,
        comments: 8,
        quote: '"Um deslumbre visual que captura a beleza assombrada de Roma. Mais sensacao do que narrativa."',
        image: "/stitch/card-cinema.jpg",
    },
    {
        author: "Julian Thorne",
        group: "Literary Gems",
        title: "Circe",
        type: "Livro",
        likes: 42,
        comments: 15,
        quote: '"Madeline Miller transforma mitologia em algo intimo, moderno e quase impossivel de largar."',
        image: "/stitch/card-book.jpg",
    },
    {
        author: "Sarah Kim",
        group: "Cinematography",
        title: "Aftersun",
        type: "Filme",
        likes: 56,
        comments: 22,
        quote: '"Um filme silencioso e devastador sobre memoria e afeto. Daqueles que ficam com voce depois."',
        image: "/stitch/card-aftersun.jpg",
    },
];

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-[#fffbff] text-[#393834]">
            <nav className="sticky top-0 z-50 border-b border-[#bcb9b3]/30 bg-[#fffbff]/85 backdrop-blur-xl">
                <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-10">
                        <span className="font-display text-2xl font-extrabold tracking-tight text-[#9a502d]">
                            Comendador
                        </span>
                        <div className="hidden items-center gap-6 text-sm font-semibold text-[#66645f] md:flex">
                            <a href="#como-funciona">Como funciona</a>
                            <a href="#destaques">Destaques</a>
                            <a href="#espera">Lista de espera</a>
                        </div>
                    </div>
                    <a
                        href="#espera"
                        className="rounded-full bg-[#9a502d] px-5 py-3 text-sm font-bold text-white! transition hover:bg-[#8b4522]"
                    >
                        Entrar na waitlist
                    </a>
                </div>
            </nav>

            <section
                id="espera"
                className="relative overflow-hidden px-6 pb-24 pt-16 lg:pb-32 lg:pt-24"
            >
                <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-[#ffae8a]/25 blur-3xl" />
                <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#c2d5fe]/35 blur-3xl" />
                <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="relative z-10">
                        <div className="mb-6 inline-flex rounded-full border border-[#bcb9b3]/40 bg-white/70 px-4 py-2 text-sm font-semibold text-[#66645f]">
                            Curadoria social para leitores e cinéfilos
                        </div>
                        <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-[#393834] sm:text-6xl lg:text-7xl">
                            Seu próximo livro ou filme favorito, indicado entre
                            seus amigos.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#66645f] lg:text-xl">
                            Entre em grupos privados e comunidades públicas para
                            descobrir recomendações com contexto, afeto e uma
                            experiência editorial que convida a ficar.
                        </p>
                        <form className="mt-10 flex max-w-xl flex-col gap-4 rounded-[1.75rem] border border-[#ebe8e1] bg-white/80 p-4 shadow-[0_24px_80px_rgba(154,80,45,0.08)] backdrop-blur sm:flex-row">
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="min-w-0 flex-1 rounded-2xl bg-[#f1ede8] px-5 py-4 text-base outline-none ring-0 placeholder:text-[#66645f]/70"
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-[#9a502d] px-7 py-4 text-base font-extrabold text-white transition hover:bg-[#8b4522]"
                            >
                                Quero acesso
                            </button>
                        </form>
                        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[#66645f]">
                            <span className="rounded-full bg-[#f7f3ee] px-4 py-2">
                                Grupos privados
                            </span>
                            <span className="rounded-full bg-[#f7f3ee] px-4 py-2">
                                Recomendações com contexto
                            </span>
                            <span className="rounded-full bg-[#f7f3ee] px-4 py-2">
                                Lançamento em breve
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="animate-float absolute -left-8 bottom-10 z-20 max-w-[250px] rounded-[1.5rem] border border-[#ebe8e1] bg-white p-5 shadow-xl">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#caf1d7] font-display text-sm font-bold text-[#496c57]">
                                    A
                                </div>
                                <div>
                                    <p className="text-sm font-extrabold">
                                        Alex indicou
                                    </p>
                                    <p className="text-xs text-[#66645f]">
                                        para o clube da semana
                                    </p>
                                </div>
                            </div>
                            <p className="font-display text-lg font-bold">
                                The Great Gatsby
                            </p>
                            <p className="mt-2 text-sm leading-6 text-[#66645f]">
                                Um classico sobre desejo, status e tudo o que
                                sobra quando a festa termina.
                            </p>
                        </div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[#fdf9f5] p-4 shadow-[0_30px_120px_rgba(83,100,136,0.2)] sm:p-6">
                            <div className="absolute inset-x-10 top-0 h-24 rounded-b-full bg-[#ffae8a]/20 blur-3xl" />
                            <Image
                                src="/stitch/hero-library.jpg"
                                alt="Estante com livros e atmosfera aconchegante"
                                width={1200}
                                height={1200}
                                className="relative aspect-square w-full rounded-[1.5rem] object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="como-funciona"
                className="bg-[#fdf9f5] px-6 py-24 lg:py-32"
            >
                <div className="mx-auto w-full max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#9a502d]">
                            Por que Comendador
                        </p>
                        <h2 className="mt-5 font-display text-4xl font-extrabold tracking-[-0.04em] text-[#393834] lg:text-5xl">
                            Uma experiência social para quem ama cultura e
                            contexto.
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-[#66645f]">
                            Um ambiente caloroso e humano, onde amigos podem se
                            reunir para compartilhar experiências
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {features.map((feature) => (
                            <article
                                key={feature.title}
                                className="rounded-[1.75rem] border border-[#ebe8e1] bg-white p-8 shadow-sm transition hover:-translate-y-1"
                            >
                                <div
                                    className={`inline-flex rounded-full px-4 py-2 text-sm font-extrabold ${feature.tone}`}
                                >
                                    {feature.eyebrow}
                                </div>
                                <h3 className="mt-6 font-display text-2xl font-bold">
                                    {feature.title}
                                </h3>
                                <p className="mt-4 text-base leading-7 text-[#66645f]">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="destaques" className="px-6 py-24 lg:py-32">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#536488]">
                                O que esperar
                            </p>
                            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-[-0.04em] lg:text-5xl">
                                Um feed com gosto de curadoria, não de ruido.
                            </h2>
                        </div>
                        <a
                            href="#espera"
                            className="text-base font-extrabold text-[#9a502d]"
                        >
                            Quero reservar meu username
                        </a>
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {recommendations.map((recommendation, index) => (
                            <article
                                key={recommendation.title}
                                className={`overflow-hidden rounded-[1.75rem] border border-[#ebe8e1] bg-white shadow-sm ${
                                    index === 1 ? "lg:translate-y-8" : ""
                                }`}
                            >
                                <Image
                                    src={recommendation.image}
                                    alt={recommendation.title}
                                    width={1200}
                                    height={900}
                                    className="aspect-[4/3] w-full object-cover"
                                />
                                <div className="p-8">
                                    <div className="mb-6 flex items-center justify-between gap-4">
                                        <div>
                                            <p className="font-bold">
                                                {recommendation.author}
                                            </p>
                                            <p className="text-sm text-[#66645f]">
                                                {recommendation.group}
                                            </p>
                                        </div>
                                        <span className="rounded-full bg-[#f7f3ee] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#9a502d]">
                                            {recommendation.type}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-2xl font-bold">
                                        {recommendation.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-7 text-[#66645f]">
                                        {recommendation.quote}
                                    </p>
                                    <div className="mt-6 flex gap-6 text-sm font-bold text-[#66645f]">
                                        <span>
                                            {recommendation.likes} favoritos
                                        </span>
                                        <span>
                                            {recommendation.comments}{" "}
                                            comentarios
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 pb-12 pt-4 lg:pb-24">
                <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-[#496c57] px-8 py-14 text-center text-white shadow-[0_30px_80px_rgba(73,108,87,0.25)] lg:px-16 lg:py-20">
                    <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#caf1d7]">
                        Lista de espera
                    </p>
                    <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.04em] lg:text-6xl">
                        Pronto para montar sua coleção cultural?
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/82">
                        Deixe seu e-mail para saber do lançamento e garantir um
                        lugar entre os primeiros convites.
                    </p>
                    <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="min-w-0 flex-1 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/60"
                        />
                        <button
                            type="submit"
                            className="rounded-full bg-white px-7 py-4 text-base font-extrabold text-[#496c57] transition hover:bg-[#caf1d7]"
                        >
                            Solicitar acesso
                        </button>
                    </form>
                </div>
            </section>

            <footer className="border-t border-[#ebe8e1] px-6 py-10">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 text-sm text-[#66645f] md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="font-display text-xl font-extrabold text-[#9a502d]">
                            Comendador
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-6 font-semibold">
                        <a href="#como-funciona">Como funciona</a>
                        <a href="#destaques">Destaques</a>
                        <a href="#espera">Lista de espera</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
