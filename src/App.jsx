import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

const EMPRESA = {
  nome: 'DEV Solutions',
  whatsapp: '556292142720',
  email: 'wagnergomes9a@gmail.com',
  tiktokUrl: 'https://www.tiktok.com/@eowagney',
  tiktokUser: '@eowagney',
  instagramUrl: 'https://www.instagram.com/eowagney',
  instagramUser: '@eowagney',
  local: 'Goiânia, GO',
}

const LINKS = [
  ['inicio', 'Início'],
  ['sobre', 'Sobre'],
  ['portfolio', 'Portfólio'],
  ['contato', 'Contato'],
]

const PILARES = [
  {
    titulo: 'Feito sob medida',
    texto:
      'Cada projeto parte da rotina do cliente. Nada de solução pronta que obriga a empresa a se adaptar.',
  },
  {
    titulo: 'Comunicação clara',
    texto:
      'Prazos combinados por escrito e entregas em etapas, para você acompanhar o que está sendo feito.',
  },
  {
    titulo: 'Tecnologia atual',
    texto:
      'Usamos ferramentas modernas e bem mantidas, que deixam o sistema rápido, seguro e fácil de evoluir.',
  },
  {
    titulo: 'Suporte depois da entrega',
    texto:
      'O projeto não termina na publicação. Corrigimos, ajustamos e ajudamos a crescer com o negócio.',
  },
]

const PROJETOS = [
  {
    titulo: 'WorkMatch',
    categoria: 'Sites',
    descricao:
      'Conecta clientes com prestadores de serviços, com cadastro, publicações e chat integrado.',
    tags: ['React', 'Chat integrado', 'Inteligência Artificial'],
    link: 'https://workmatch-bay.vercel.app/inicio',
  },
  {
    titulo: 'Extração de dados bancários',
    categoria: 'Sistemas',
    descricao:
      'Extrai dados bancários de documentos eletrônicos em formato excel.',
    tags: ['Modelo LLM', 'Python', 'Gradio'],
    link: 'https://22fe4f4e3d07e12646.gradio.live/',
  },
  {
    titulo: 'WorkMatch App',
    categoria: 'Aplicativos',
    descricao:
      'Conecta clientes com prestadores de serviços, com cadastro, publicações e chat integrado.',
    tags: ['Flutter', 'Chat integrado', 'Inteligência Artificial'],
    link: 'https://github.com/joaogaaabriel/WorkMatch-Mobile/releases/download/v1.0.0/workmatch.apk',
  },
  {
    titulo: 'Interação com público',
    categoria: 'Sites',
    descricao:
      'Site rápido, otimizado para interagir com convidados',
    tags: ['React', 'Vite'],
    link: 'https://meu-projeto-eight-kappa.vercel.app/',
  },
]

const FILTROS = ['Todos', 'Sites', 'Sistemas', 'Aplicativos']

/* ------------------------------ Ícones ------------------------------ */

const ICONES = {
  email: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  whatsapp: (
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  local: (
    <>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  seta: <path d="M7 17 17 7M7 7h10v10" />,
}

function Icone({ nome }) {
  return (
    <svg
      className="icone"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONES[nome]}
    </svg>
  )
}

/* Linha de circuito, inspirada nos traços da logo */
function Trace() {
  return <div className="trace" aria-hidden="true" />
}

/* ------------------------------ Página ------------------------------ */

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [filtro, setFiltro] = useState('Todos')
  const [form, setForm] = useState({ nome: '', mensagem: '' })

  const projetos =
    filtro === 'Todos'
      ? PROJETOS
      : PROJETOS.filter((p) => p.categoria === filtro)

  const atualizar = (campo) => (e) =>
    setForm((f) => ({ ...f, [campo]: e.target.value }))

  const enviarWhatsApp = (e) => {
    e.preventDefault()
    const texto = `Olá! Meu nome é ${form.nome}.\n\n${form.mensagem}`
    window.open(
      `https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(texto)}`,
      '_blank',
      'noopener'
    )
  }

  const fecharMenu = () => setMenuAberto(false)

  return (
    <>
      {/* ---------- Cabeçalho ---------- */}
      <header className="topo">
        <div className="topo-interno contido">
          <a href="#inicio" className="marca" onClick={fecharMenu}>
            <span className="marca-simbolo">
              <img src={logo} alt="" />
            </span>
            <span className="marca-nome">{EMPRESA.nome}</span>
          </a>

          <button
            type="button"
            className="menu-botao"
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            onClick={() => setMenuAberto((v) => !v)}
          >
            <span className="menu-botao-texto">
              {menuAberto ? 'Fechar' : 'Menu'}
            </span>
          </button>

          <nav
            id="menu-principal"
            className={`menu ${menuAberto ? 'menu-aberto' : ''}`}
            aria-label="Principal"
          >
            {LINKS.map(([id, texto]) => (
              <a key={id} href={`#${id}`} onClick={fecharMenu}>
                {texto}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* ---------- Início ---------- */}
        <section id="inicio" className="hero">
          <div className="contido hero-grade">
            <div className="hero-texto">
              <h1>Software sob medida para o seu negócio funcionar melhor.</h1>
              <p className="hero-descricao">
                Trabalhamos com sites, sistemas, automações, aplicativos e google ads para empresas que querem
                organizar a rotina, atender melhor e vender mais.
              </p>
              <div className="hero-acoes">
                <a href="#contato" className="botao botao-principal">
                  Entre em contato
                </a>
                <a href="#portfolio" className="botao botao-secundario">
                  Ver projetos
                </a>
              </div>
            </div>

            <div className="hero-logo">
              <img src={logo} alt="DEV Solutions" />
            </div>
          </div>
        </section>

        {/* ---------- Sobre ---------- */}
        <section id="sobre" className="secao">
          <div className="contido">
            <Trace />
            <div className="sobre-grade">
              <div className="sobre-texto">
                <h2>Sobre a {EMPRESA.nome}</h2>
                <p>
                  A {EMPRESA.nome} desenvolve sites, sistemas e aplicativos para
                  empresas que querem trabalhar com mais organização e alcançar
                  mais clientes.
                </p>
                <p>
                  Trabalhamos perto de cada cliente: entendemos o problema,
                  propomos a solução mais simples que resolve e acompanhamos o
                  projeto depois de publicado.
                </p>
              </div>

              <ul className="pilares">
                {PILARES.map((p) => (
                  <li key={p.titulo}>
                    <h3>{p.titulo}</h3>
                    <p>{p.texto}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- Portfólio ---------- */}
        <section id="portfolio" className="secao secao-escura">
          <div className="contido">
            <Trace />
            <div className="portfolio-cabecalho">
              <div>
                <h2>Portfólio</h2>
                <p className="secao-intro">
                  Alguns dos tipos de projeto que desenvolvemos.
                </p>
              </div>

              <div className="filtros" role="group" aria-label="Filtrar projetos">
                {FILTROS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`filtro ${filtro === f ? 'filtro-ativo' : ''}`}
                    aria-pressed={filtro === f}
                    onClick={() => setFiltro(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <ul className="projetos">
              {projetos.map((p, i) => (
                <li key={p.titulo} className="projeto">
                  <div className={`miniatura miniatura-${i % 3}`}>
                    {p.imagem ? (
                      <img src={p.imagem} alt={p.titulo} />
                    ) : (
                      <div className="janela" aria-hidden="true">
                        <span className="janela-barra">
                          <i />
                          <i />
                          <i />
                        </span>
                        <span className="janela-linha janela-linha-1" />
                        <span className="janela-linha janela-linha-2" />
                        <span className="janela-linha janela-linha-3" />
                      </div>
                    )}
                  </div>

                  <div className="projeto-info">
                    <span className="projeto-categoria">{p.categoria}</span>
                    <h3>{p.titulo}</h3>
                    <p>{p.descricao}</p>
                    <ul className="tags">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  {p.link ? (
                    <a
                      className="projeto-link"
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${p.titulo}`}
                    >
                      <Icone nome="seta" />
                    </a>
                  ) : (
                    <span className="projeto-link projeto-link-vazio" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Contato ---------- */}
        <section id="contato" className="secao">
          <div className="contido">
            <Trace />
            <div className="contato-grade">
              <div className="contato-info">
                <h2>Vamos conversar sobre o seu projeto</h2>
                <p className="secao-intro">
                  Conte o que você precisa. Respondemos com uma proposta e um
                  prazo estimado.
                </p>

                <ul className="contato-lista">
                  <li>
                    <Icone nome="whatsapp" />
                    <a
                      href={`https://wa.me/${EMPRESA.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {EMPRESA.telefone}
                    </a>
                  </li>
                  <li>
                    <Icone nome="email" />
                    <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>
                  </li>
                  <li>
                    <Icone nome="instagram" />
                    <a href={EMPRESA.instagramUrl} target="_blank" rel="noreferrer">
                      {EMPRESA.instagramUser}
                    </a>
                  </li>
                  <li>
                    <Icone nome="local" />
                    <span>{EMPRESA.local}</span>
                  </li>
                </ul>
              </div>

              <form className="formulario" onSubmit={enviarWhatsApp}>
                <label>
                  Seu nome
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={atualizar('nome')}
                    autoComplete="name"
                  />
                </label>
                <label>
                  Como podemos ajudar?
                  <textarea
                    required
                    rows="5"
                    value={form.mensagem}
                    onChange={atualizar('mensagem')}
                  />
                </label>
                <button type="submit" className="botao botao-principal">
                  Enviar pelo WhatsApp
                </button>
                <p className="formulario-nota">
                  Ao enviar, abrimos o WhatsApp com a sua mensagem pronta.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Rodapé ---------- */}
      <footer className="rodape">
        <div className="contido rodape-interno">
          <span>
            © {new Date().getFullYear()} {EMPRESA.nome}. Todos os direitos
            reservados.
          </span>
          <a href="#inicio">Voltar ao topo</a>
        </div>
      </footer>
    </>
  )
}

export default App