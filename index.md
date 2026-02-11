<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>AINSE | AI-Native Software Engineering</title>
  <meta name="description" content="What changes when AI starts developing software? A crisp decision brief on SDLC impact, risks, and governance." />

  <!-- Social Preview -->
  <meta property="og:title" content="AI-Native Software Engineering (AINSE)" />
  <meta property="og:description" content="What changes when AI starts developing software? Decision gates, governance, and ROI." />
  <meta property="og:image" content="og.png" />
  <meta property="og:url" content="https://sunayanahaz.github.io/ai-native-decision-brief/" />
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg:#0a0e14;
      --panel:#1c2128;
      --panel2:#151921;
      --border:#2d3540;
      --text:#e6edf3;
      --muted:#8b949e;
      --cyan:#00d9ff;
      --purple:#7000ff;
      --danger:#ff4f6d;
      --warn:#f2cc60;
      --ok:#3fb950;
      --radius:14px;
      --max:1120px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior:smooth; }
    body{
      margin:0;
      background: var(--bg);
      color: var(--text);
      font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
      overflow-x:hidden;
    }
    a { color: inherit; text-decoration: none; }
    .wrap{ max-width: var(--max); margin: 0 auto; padding: 0 24px; }

    /* Animated grid background */
    .grid-bg{
      position: fixed; inset: 0;
      pointer-events: none;
      opacity: 1;
      background-image:
        linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: gridScroll 20s linear infinite;
      z-index: 0;
    }
    @keyframes gridScroll {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }

    /* Gradient text + shimmer */
    .gradient-text{
      background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s ease-in-out infinite;
    }
    @keyframes shimmer {
      0%,100% { filter: brightness(1); }
      50% { filter: brightness(1.2); }
    }

    /* Pulse outline */
    .pulse-border{ animation: pulse 2s ease-in-out infinite; }
    @keyframes pulse{
      0%,100%{ box-shadow: 0 0 0 0 rgba(0,217,255,.35); }
      50%{ box-shadow: 0 0 0 10px rgba(0,217,255,0); }
    }

    /* Navbar */
    .nav{
      position: fixed; top:0; left:0; right:0;
      z-index: 50;
      border-bottom: 1px solid var(--border);
      background: rgba(10,14,20,.88);
      backdrop-filter: blur(12px);
      transition: background .25s ease;
    }
    .nav-inner{
      display:flex; align-items:center; justify-content:space-between;
      padding: 16px 0;
      gap: 18px;
    }
    .brand{
      display:flex; align-items:center; gap: 4px;
      font-family: "Syne", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      font-weight: 800;
      font-size: 24px;
      letter-spacing:.2px;
    }
    .brand .bracket{ color: var(--cyan); font-size: 30px; }
    .nav-links{
      display:flex; gap: 28px; align-items:center;
      font-size: 13px;
    }
    .nav-links a{
      color: var(--muted);
      position: relative;
      padding: 6px 0;
      transition: color .2s ease;
    }
    .nav-links a:hover{ color: var(--cyan); }
    .nav-links a::after{
      content:"";
      position:absolute; left:0; bottom:-6px;
      width:0; height:2px;
      background: var(--cyan);
      transition: width .25s ease;
    }
    .nav-links a:hover::after{ width:100%; }

    .nav-cta{
      border: 2px solid var(--border);
      padding: 10px 14px;
      font-weight: 700;
      font-size: 12px;
      transition: all .25s ease;
    }
    .nav-cta:hover{
      border-color: var(--cyan);
      color: var(--cyan);
      transform: translateY(-1px);
    }

    /* Hero */
    .hero{
      position: relative;
      min-height: 100vh;
      padding-top: 120px;
      padding-bottom: 60px;
      z-index: 10;
      overflow: hidden;
    }
    .hero-grid{
      display:grid;
      grid-template-columns: 1.05fr .95fr;
      gap: 28px;
      align-items: center;
    }
    @media (max-width: 980px){
      .hero-grid{ grid-template-columns: 1fr; }
      .code-window{ display:none; }
      .nav-links{ display:none; }
    }

    .badge{
      display:inline-block;
      font-size: 11px;
      letter-spacing: .22em;
      text-transform: uppercase;
      color: var(--cyan);
      border: 1px solid var(--cyan);
      padding: 10px 14px;
      margin-bottom: 18px;
    }
    h1{
      font-family: "Syne", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      font-weight: 800;
      font-size: 62px;
      line-height: 1.0;
      margin: 0 0 16px;
      letter-spacing: -0.02em;
    }
    @media (max-width: 520px){
      h1{ font-size: 44px; }
    }
    .lead{
      color: var(--muted);
      font-size: 20px;
      margin: 0 0 10px;
    }
    .presented{
      color: var(--muted);
      font-size: 12px;
      margin: 0 0 24px;
    }

    .btn-row{ display:flex; gap: 12px; flex-wrap: wrap; }
    .btn{
      display:inline-flex; align-items:center; justify-content:center;
      padding: 12px 18px;
      font-weight: 800;
      font-size: 13px;
      border: 2px solid var(--border);
      transition: all .25s ease;
    }
    .btn-primary{
      background: var(--cyan);
      border-color: var(--cyan);
      color: var(--bg);
    }
    .btn-primary:hover{
      background: transparent;
      color: var(--cyan);
      transform: translateY(-2px);
      box-shadow: 0 14px 40px rgba(0,217,255,.18);
    }
    .btn-ghost:hover{
      border-color: var(--cyan);
      color: var(--cyan);
      transform: translateY(-2px);
    }

    .chips{ margin-top: 18px; display:flex; flex-wrap:wrap; gap: 10px; }
    .chip{
      border: 1px solid rgba(0,217,255,.30);
      background: rgba(0,217,255,.07);
      color: rgba(230,237,243,.92);
      font-size: 11px;
      padding: 8px 10px;
      border-radius: 999px;
    }

    /* Code window */
    .code-window{
      position: relative;
      width: 100%;
      max-width: 520px;
      margin-left: auto;
      opacity: .8;
      filter: saturate(1.1);
      transform: translateY(0px);
    }
    .code-shell{
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 30px 80px rgba(0,0,0,.45), 0 0 0 1px rgba(0,217,255,.10);
    }
    .code-top{
      background: var(--panel2);
      padding: 12px 14px;
      display:flex; gap: 8px; align-items:center;
      border-bottom: 1px solid var(--border);
    }
    .dot{ width: 12px; height: 12px; border-radius: 999px; }
    .dot.red{ background:#ff5f56; }
    .dot.yellow{ background:#ffbd2e; }
    .dot.green{ background:#27c93f; }
    .filename{ margin-left:auto; font-size: 12px; color: var(--muted); }
    .code-body{
      position: relative;
      padding: 18px;
      font-size: 13px;
      line-height: 1.65;
      white-space: pre;
    }
    .scanline:before{
      content:"";
      position:absolute;
      inset:0;
      background: linear-gradient(to bottom, transparent 0%, rgba(0,217,255,0.035) 50%, transparent 100%);
      opacity:.7;
      transform: translateY(-60%);
      animation: scan 4.5s ease-in-out infinite;
      pointer-events:none;
    }
    @keyframes scan {
      0% { transform: translateY(-60%); }
      50% { transform: translateY(40%); }
      100% { transform: translateY(-60%); }
    }

    .kw{ color:#ff7b72; font-weight:700; }
    .fn{ color:#d2a8ff; font-weight:700; }
    .cm{ color: var(--muted); }
    .status{ margin-top: 10px; color: var(--muted); font-size: 12px; }

    /* Stats bar */
    .stats{
      background: var(--panel);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 50px 0;
      position: relative;
      z-index: 10;
    }
    .stats-grid{
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      text-align:center;
    }
    @media (max-width: 780px){
      .stats-grid{ grid-template-columns: 1fr; }
    }
    .stat-value{
      font-family: "Syne", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      font-size: 56px;
      font-weight: 800;
      margin-bottom: 10px;
    }
    .stat-label{ color: var(--muted); font-size: 13px; }

    /* Sections */
    section.block{
      position: relative;
      z-index: 10;
      padding: 96px 0;
    }
    .block.alt{ background: linear-gradient(135deg, rgba(0,217,255,.02), rgba(112,0,255,.02)); }
    .block.dark{ background: var(--panel2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .title-row{
      display:flex; align-items: center; gap: 18px;
      margin-bottom: 44px;
      flex-wrap: wrap;
    }
    .num{
      font-family: "Syne", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      font-weight: 800;
      font-size: 64px;
      color: var(--cyan);
      opacity: .18;
      line-height: 1;
    }
    h2{
      font-family: "Syne", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      font-weight: 800;
      font-size: 44px;
      margin: 0;
    }
    @media (max-width: 520px){
      h2{ font-size: 34px; }
    }

    .grid-3{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    .grid-2{ display:grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
    @media (max-width: 900px){
      .grid-3, .grid-2{ grid-template-columns: 1fr; }
    }

    .card{
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 22px;
      transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease, background .25s ease;
    }
    .card:hover{
      transform: translateY(-6px);
      border-color: rgba(0,217,255,.7);
      box-shadow: 0 22px 60px rgba(0,217,255,.08);
      background: #222a35;
    }
    .card h3{
      font-family: "Syne", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      margin: 0 0 10px;
      font-size: 22px;
    }
    .card p{ margin: 0; color: var(--muted); font-size: 13px; line-height: 1.7; }

    /* SDLC timeline */
    .timeline{ max-width: 760px; }
    .step{
      display:flex; gap: 18px; align-items:flex-start;
    }
    .bubble{
      flex: 0 0 56px;
      width: 56px; height: 56px;
      border-radius: 999px;
      border: 2px solid var(--cyan);
      display:flex; align-items:center; justify-content:center;
      font-family: "Syne", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      font-weight: 800;
      color: var(--cyan);
      background: var(--bg);
    }
    .step h4{
      font-family: "Syne", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      margin: 0 0 6px;
      font-size: 22px;
    }
    .step p{ margin: 0 0 22px; color: var(--muted); }
    .line{
      margin-left: 27px;
      width: 2px;
      height: 36px;
      background: linear-gradient(var(--cyan), transparent);
    }

    /* Business callouts */
    .callout{
      background: var(--panel);
      border: 1px solid var(--border);
      border-left: 4px solid var(--warn);
      border-radius: var(--radius);
      padding: 26px;
    }
    .callout.red{ border-left-color: var(--danger); }
    .callout .tag{ font-size: 11px; letter-spacing: .14em; opacity: .75; margin-bottom: 10px; font-weight: 700; }
    .callout h3{ margin:0 0 8px; font-size: 24px; font-family:"Syne", system-ui; }
    .callout p{ margin: 0; color: var(--muted); }
    .callout .strong{ color: var(--warn); font-weight: 800; margin-top: 12px; }

    .risk-box{
      background: linear-gradient(135deg, rgba(255,79,109,.10), rgba(112,0,255,.10));
      border: 1px solid rgba(255,79,109,.7);
      border-radius: var(--radius);
      padding: 26px;
      margin-top: 18px;
    }
    .risk-box h3{
      margin: 0 0 10px;
      font-family:"Syne", system-ui;
      font-size: 28px;
      color: var(--danger);
    }

    /* Strategy highlight */
    .highlight{
      background: linear-gradient(135deg, rgba(0,217,255,.10), rgba(112,0,255,.10));
      border: 2px solid var(--cyan);
      border-radius: var(--radius);
      padding: 26px;
      text-align:center;
      margin-bottom: 18px;
    }
    .highlight p{
      margin: 0;
      font-family:"Syne", system-ui;
      font-weight: 800;
      font-size: 24px;
      color: var(--cyan);
      line-height: 1.3;
    }

    .gates{
      background: var(--panel);
      border: 2px solid var(--cyan);
      border-radius: var(--radius);
      padding: 28px;
      position: relative;
      overflow:hidden;
    }
    .blob{
      position:absolute; width: 220px; height:220px; border-radius: 999px;
      filter: blur(40px);
      opacity:.35;
    }
    .blob.one{ right:-90px; top:-90px; background: rgba(0,217,255,.25); }
    .blob.two{ left:-90px; bottom:-90px; background: rgba(112,0,255,.25); }

    .gate-grid{ display:grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 18px; }
    @media (max-width: 900px){ .gate-grid{ grid-template-columns:1fr; } }
    .gate{
      background: var(--panel2);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 18px;
      transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
    }
    .gate:hover{
      transform: translateY(-6px);
      border-color: rgba(0,217,255,.7);
      box-shadow: 0 24px 70px rgba(0,217,255,.08);
    }
    .gate h4{
      margin: 0 0 10px;
      font-family:"Syne", system-ui;
      font-size: 22px;
      color: var(--cyan);
    }
    .gate ul{ margin: 0; padding-left: 18px; color: var(--muted); font-size: 13px; line-height: 1.7; }
    .quote{
      margin-top: 18px;
      text-align:center;
      font-family:"Syne", system-ui;
      font-weight: 800;
      font-size: 28px;
      color: var(--cyan);
    }

    /* Resources */
    .resource{
      display:flex; gap: 18px; align-items:center;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 22px;
      transition: transform .25s ease, border-color .25s ease;
    }
    .resource:hover{
      transform: translateX(8px);
      border-color: rgba(0,217,255,.7);
    }
    .ico{ font-size: 40px; width: 56px; text-align:center; }
    .resource h3{ margin:0 0 6px; font-family:"Syne", system-ui; font-size: 26px; }
    .resource p{ margin:0 0 10px; color: var(--muted); font-size: 13px; }
    .dl{ color: var(--cyan); font-weight: 800; display:inline-block; }
    .dl:hover{ color: var(--purple); }

    /* Footer */
    footer{
      background: var(--panel2);
      border-top: 1px solid var(--border);
      padding: 46px 0;
      position: relative;
      z-index: 10;
    }
    .foot{
      display:flex; justify-content:space-between; gap: 18px; flex-wrap:wrap;
      align-items:center;
    }
    .small{ color: var(--muted); font-size: 13px; }

    /* Helper */
    .sp-8{ height: 8px; }
  </style>
</head>

<body>
  <div class="grid-bg"></div>

  <!-- NAV -->
  <div class="nav" id="nav">
    <div class="wrap">
      <div class="nav-inner">
        <div class="brand">
          <span class="bracket">[</span>
          <span class="gradient-text">AINSE</span>
          <span class="bracket">]</span>
        </div>

        <div class="nav-links">
          <a href="#overview">Overview</a>
          <a href="#applications">Applications</a>
          <a href="#sdlc">SDLC</a>
          <a href="#business">Business</a>
          <a href="#strategy">Strategy</a>
          <a href="#resources">Resources</a>
        </div>

        <a class="nav-cta" href="#resources">Download</a>
      </div>
    </div>
  </div>

  <!-- HERO -->
  <section class="hero">
    <div class="wrap">
      <div class="hero-grid">
        <div>
          <div class="badge pulse-border">EMERGING TECHNOLOGY BRIEFING</div>

          <h1>
            AI-Native Software<br />
            <span class="gradient-text">Engineering</span>
          </h1>

          <p class="lead">What changes when AI starts developing software?</p>
                   <div class="btn-row">
            <a class="btn btn-primary" href="#overview">Explore the Brief</a>
            <a class="btn btn-ghost" href="#resources">Download Report</a>
          </div>

          <div class="chips">
            <span class="chip">AI TRiSM</span>
            <span class="chip">Decision Gates</span>
            <span class="chip">Policy-as-Code</span>
            <span class="chip">Audit Logs</span>
            <span class="chip">Agent Workflows</span>
          </div>
        </div>

        <div class="code-window" id="codeWindow">
          <div class="code-shell scanline">
            <div class="code-top">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
              <span class="filename">ai_agent.py</span>
            </div>
            <div class="code-body">
<span class="kw">def</span> <span class="fn">autonomous_develop</span>():
    <span class="cm"># AI writes software</span>
    requirements = <span class="fn">parse_natural_language</span>()
    architecture = <span class="fn">design_system</span>(requirements)
    code = <span class="fn">generate_production_code</span>(architecture)
    tests = <span class="fn">create_test_suite</span>(code)

    <span class="kw">return</span> <span class="fn">deploy_with_gates</span>(code, tests)

<div class="status">&gt; decision_gates: <b style="color:var(--cyan)">enabled</b> • audit_logging: <b style="color:var(--cyan)">on</b></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="stats">
    <div class="wrap">
      <div class="stats-grid">
        <div>
          <div class="stat-value gradient-text">40%</div>
          <div class="stat-label">Expected enterprise adoption by 2030 (forecast)</div>
        </div>
        <div>
          <div class="stat-value gradient-text">79%</div>
          <div class="stat-label">Software releases missing timelines (reported)</div>
        </div>
        <div>
          <div class="stat-value gradient-text">&lt;1%</div>
          <div class="stat-label">Current end-to-end autonomy adoption</div>
        </div>
      </div>
    </div>
  </section>

  <!-- OVERVIEW -->
  <section class="block" id="overview">
    <div class="wrap">
      <div class="title-row">
        <div class="num">01</div>
        <h2>What is AINSE?</h2>
      </div>

      <div class="grid-3">
        <div class="card" style="grid-column: span 2;">
          <h3>Core idea</h3>
          <p style="color:var(--cyan); font-weight:800; font-size:18px; margin-bottom:10px;">
            We are entering an era where software writes software.
          </p>
          <p>
            AI-Native Software Engineering (AINSE) represents autonomous or semi-autonomous execution of software
            engineering tasks by AI agents integrated throughout the SDLC.
          </p>
          <div class="sp-8"></div>
          <p>
            The opportunity is real — but value compounds only when governance keeps pace with autonomy.
          </p>
        </div>

        <div class="card" style="border-color: var(--cyan); background: linear-gradient(135deg, rgba(0,217,255,.05), rgba(112,0,255,.05));">
          <h3 style="color:var(--cyan)">Key distinction</h3>
          <p>
            AINSE goes beyond assistants. It positions AI as an agent capable of executing multi-step workflows with
            minimal human intervention — requiring decision gates, auditability, and ownership.
          </p>
        </div>
      </div>

      <div class="sp-8"></div>
      <div class="sp-8"></div>

      <h3 style="font-family:'Syne',system-ui; font-size:24px; margin: 18px 0 14px;">Five layers of capability</h3>
      <div class="grid-3">
        <div class="card"><h3>🛡️ Principles</h3><p>Responsible AI, transparency, trust.</p></div>
        <div class="card"><h3>🧠 Intelligence</h3><p>Models that interpret requirements.</p></div>
        <div class="card"><h3>🔄 Workflow</h3><p>Automation across SDLC phases.</p></div>
        <div class="card"><h3>🔧 Tools</h3><p>IDEs + autonomous agent stacks.</p></div>
        <div class="card"><h3>📊 Data</h3><p>Feedback loops + eval datasets.</p></div>
      </div>
    </div>
  </section>

  <!-- APPLICATIONS -->
  <section class="block alt" id="applications">
    <div class="wrap">
      <div class="title-row">
        <div class="num">02</div>
        <h2>AI Applications Across Development</h2>
      </div>

      <div class="grid-3">
        <div class="card"><h3>💻 Code generation</h3><p>Autocompletion and synthesis from natural language.</p></div>
        <div class="card"><h3>🐛 Bug detection</h3><p>Automated analysis and correction suggestions.</p></div>
        <div class="card"><h3>🧪 Testing automation</h3><p>Test case generation and optimization.</p></div>
        <div class="card"><h3>📚 Documentation</h3><p>Auto-generated API guides and explanations.</p></div>
        <div class="card"><h3>🏗️ Architecture design</h3><p>System designs based on requirements.</p></div>
        <div class="card"><h3>🔒 Security enhancement</h3><p>Vulnerability identification and mitigation.</p></div>
      </div>
    </div>
  </section>

  <!-- SDLC -->
  <section class="block" id="sdlc">
    <div class="wrap">
      <div class="title-row">
        <div class="num">03</div>
        <h2>AI Transforming the SDLC</h2>
      </div>

      <div class="timeline">
        <div class="step">
          <div class="bubble">1</div>
          <div>
            <h4>Requirements</h4>
            <p>NLP converts ideas into structured specs and user stories.</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="step">
          <div class="bubble">2</div>
          <div>
            <h4>Design</h4>
            <p>Architecture options and UI patterns generated instantly.</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="step">
          <div class="bubble">3</div>
          <div>
            <h4>Development</h4>
            <p>Synthesis + refactor + integration assistance.</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="step">
          <div class="bubble">4</div>
          <div>
            <h4>Testing</h4>
            <p>Automated suites, better coverage, and regression checks.</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="step">
          <div class="bubble">5</div>
          <div>
            <h4>Deployment</h4>
            <p>CI/CD optimization + failure prediction + rollback.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BUSINESS -->
  <section class="block dark" id="business">
    <div class="wrap">
      <div class="title-row">
        <div class="num">04</div>
        <h2>The Business Problem</h2>
      </div>

      <div class="grid-2">
        <div class="callout">
          <div class="tag">THE PRESSURE</div>
          <h3>Release faster with fewer engineers</h3>
          <p class="strong">Timelines slip, rework grows, quality debt compounds.</p>
        </div>

        <div class="callout red">
          <div class="tag">THE REALITY</div>
          <h3>Speed gains can hide security & reliability risk</h3>
          <p>Output increases, but duplication and maintainability issues can rise — especially in agent-to-agent chains.</p>
        </div>
      </div>

      <div class="risk-box">
        <h3>The real risk isn’t bad code — it’s ungoverned decisions</h3>
        <p style="margin:0 0 14px; color: var(--text);">When AI shifts from suggesting to deciding:</p>

        <div class="grid-3">
          <div class="card" style="background: rgba(255,255,255,.02);">
            <h3>Control shifts</h3>
            <p>From human approvals → policy + automation.</p>
          </div>
          <div class="card" style="background: rgba(255,255,255,.02);">
            <h3>Accountability blurs</h3>
            <p>Who owns an AI-made decision?</p>
          </div>
          <div class="card" style="background: rgba(255,255,255,.02);">
            <h3>Errors compound</h3>
            <p>One agent’s output becomes another’s input.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STRATEGY -->
  <section class="block" id="strategy">
    <div class="wrap">
      <div class="title-row">
        <div class="num">05</div>
        <h2>Strategic Recommendations</h2>
      </div>

      <div class="highlight">
        <p>
          The biggest ROI isn’t “coding faster.” It’s reducing the hidden tax of rework + reliability + security debt
          created when autonomy outpaces governance.
        </p>
      </div>

      <div class="grid-2">
        <div class="card"><h3>⚖️ Bias mitigation</h3><p>Diverse data + regular audits to reduce harmful outcomes.</p></div>
        <div class="card"><h3>👁️ Human oversight</h3><p>Maintain manual skills; require security reviews.</p></div>
        <div class="card"><h3>📋 Transparency</h3><p>Interpretability + clear documentation for accountability.</p></div>
        <div class="card"><h3>🎓 Workforce development</h3><p>Reskill roles toward AI collaboration and oversight.</p></div>
      </div>

      <div class="sp-8"></div>
      <div class="sp-8"></div>

      <div class="gates">
        <div class="blob one"></div>
        <div class="blob two"></div>

        <h3 style="font-family:'Syne',system-ui; font-size:28px; margin:0;">Implementation: Pilot → Gate → Scale</h3>
        <p style="color:var(--muted); margin: 10px 0 0;">Simple, executive-ready decision gates you can operationalize.</p>

        <div class="gate-grid">
          <div class="gate">
            <h4>PILOT</h4>
            <ul>
              <li>Low-risk workflows (docs/tests)</li>
              <li>Human-in-the-loop approvals</li>
              <li>Define “no-go” data</li>
            </ul>
          </div>

          <div class="gate">
            <h4>GATE</h4>
            <ul>
              <li>Policy checks in CI</li>
              <li>Quality evals + regression</li>
              <li>Audit logs (prompts/outputs/diffs)</li>
            </ul>
          </div>

          <div class="gate">
            <h4>SCALE</h4>
            <ul>
              <li>Policy-as-code + monitoring</li>
              <li>Rollback playbooks</li>
              <li>Human ownership stays explicit (RACI)</li>
            </ul>
          </div>
        </div>

        <div class="quote">“AI-native engineering is inevitable. Un-governed autonomy is optional.”</div>
      </div>
    </div>
  </section>

  <!-- RESOURCES -->
  <section class="block dark" id="resources">
    <div class="wrap">
      <div class="title-row">
        <div class="num">06</div>
        <h2>Resources</h2>
      </div>

      <!-- Update these links to your real files/URLs -->
      <div style="display:flex; flex-direction:column; gap: 16px;">
        <div class="resource">
          <div class="ico">📄</div>
          <div style="flex:1;">
            <h3>Executive Briefing Report</h3>
            <p>Shareable decision brief for leaders.</p>
            <a class="dl" href="report.pdf">Download →</a>
          </div>
        </div>

        <div class="resource">
          <div class="ico">📊</div>
          <div style="flex:1;">
            <h3>Presentation Deck</h3>
            <p>Full slide deck covering the AINSE storyline.</p>
            <a class="dl" href="deck.pptx">Download →</a>
          </div>
        </div>
      </div>

      <div style="margin-top: 46px; border-top: 1px solid var(--border); padding-top: 24px; display:flex; justify-content:space-between; gap: 14px; flex-wrap:wrap; align-items:center;">
        <div>
          <div class="brand" style="font-size:22px;">
            <span class="bracket">[</span>
            <span class="gradient-text">AINSE</span>
            <span class="bracket">]</span>
          </div>
          <div class="small">AI-Native Software Engineering</div>
        </div>

        <div style="text-align:right;">
          <div class="small">Presented by Sahil Dua & Sunayana Hazarika</div>
          <div class="small" style="color: var(--cyan); font-weight:800; font-family:'Syne',system-ui;">2026</div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="wrap">
      <div class="foot">
        <div class="small">Tip: Add <b>og.png</b> (1200×630) for a premium LinkedIn preview.</div>
        <div class="small">Repo: <b>ai-native-decision-brief</b></div>
      </div>
    </div>
  </footer>

  <script>
    // Navbar background change on scroll
    const nav = document.getElementById('nav');
    const codeWindow = document.getElementById('codeWindow');

    function onScroll(){
      const y = window.scrollY || 0;
      nav.style.background = y > 80 ? 'rgba(10, 14, 20, 0.95)' : 'rgba(10, 14, 20, 0.88)';

      // Parallax code window
      if (codeWindow) {
        const offset = Math.min(120, y * 0.25);
        codeWindow.style.transform = `translateY(${offset}px)`;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  </script>
</body>
</html>
