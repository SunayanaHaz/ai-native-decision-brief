<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI-Native Software Engineering | AINSE</title>
  <meta name="description" content="What changes when AI starts developing software? A crisp, executive-ready brief on risks, SDLC impact, and governance." />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg:#070A12;
      --panel:#0C1222;
      --card:#0F1933;
      --text:#F5F7FF;
      --muted:rgba(245,247,255,.76);
      --border:rgba(120,160,255,.18);
      --accent:#7C5CFF;
      --accent2:#2EE4FF;
      --shadow: 0 18px 60px rgba(0,0,0,.45);
      --radius: 22px;
      --max: 1100px;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background:
        radial-gradient(1200px 700px at 10% 0%, rgba(124,92,255,.22), transparent 55%),
        radial-gradient(900px 600px at 90% 10%, rgba(46,228,255,.16), transparent 60%),
        radial-gradient(700px 500px at 50% 100%, rgba(124,92,255,.14), transparent 60%),
        var(--bg);
      color:var(--text);
      line-height:1.55;
    }
    a{color:inherit}
    .wrap{max-width:var(--max); margin:0 auto; padding:28px 18px 80px}
    .nav{
      display:flex; align-items:center; justify-content:space-between;
      padding:14px 16px;
      background:rgba(12,18,34,.6);
      border:1px solid var(--border);
      border-radius:999px;
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 40px rgba(0,0,0,.25);
      position:sticky; top:14px; z-index:50;
    }
    .brand{display:flex; gap:10px; align-items:center; font-weight:800; letter-spacing:.2px}
    .dot{
      width:12px; height:12px; border-radius:999px;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      box-shadow: 0 0 0 6px rgba(124,92,255,.12);
    }
    .links{display:flex; gap:12px; align-items:center; flex-wrap:wrap}
    .links a{
      text-decoration:none;
      padding:10px 12px;
      border-radius:999px;
      border:1px solid transparent;
      color:var(--muted);
      font-weight:600;
      font-size:14px;
    }
    .links a:hover{border-color:var(--border); color:var(--text); background:rgba(255,255,255,.03)}
    .btn{
      text-decoration:none;
      padding:10px 14px;
      border-radius:999px;
      font-weight:700;
      font-size:14px;
      border:1px solid rgba(124,92,255,.45);
      background: linear-gradient(135deg, rgba(124,92,255,.22), rgba(46,228,255,.12));
      box-shadow: 0 14px 40px rgba(124,92,255,.12);
      white-space:nowrap;
    }
    .hero{
      margin-top:22px;
      display:grid;
      grid-template-columns: 1.2fr .8fr;
      gap:18px;
      align-items:stretch;
    }
    @media (max-width: 900px){ .hero{grid-template-columns: 1fr} }
    .panel{
      background:rgba(12,18,34,.68);
      border:1px solid var(--border);
      border-radius:var(--radius);
      box-shadow: var(--shadow);
      padding:22px;
      overflow:hidden;
      position:relative;
    }
    .panel:before{
      content:"";
      position:absolute; inset:-2px;
      background: radial-gradient(700px 250px at 20% 0%, rgba(124,92,255,.22), transparent 65%),
                  radial-gradient(600px 250px at 90% 20%, rgba(46,228,255,.18), transparent 60%);
      pointer-events:none;
      opacity:.9;
    }
    .panel > *{position:relative}
    .kicker{
      display:inline-flex; gap:8px; align-items:center;
      padding:8px 12px;
      border-radius:999px;
      border:1px solid var(--border);
      background:rgba(255,255,255,.03);
      color:var(--muted);
      font-weight:700;
      font-size:13px;
      letter-spacing:.2px;
    }
    h1{
      margin:14px 0 10px;
      font-size:42px;
      line-height:1.08;
      letter-spacing:-.8px;
    }
    @media (max-width: 520px){ h1{font-size:34px} }
    .sub{
      margin:0 0 18px;
      color:var(--muted);
      font-size:16px;
      max-width:60ch;
    }
    .heroGrid{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:12px;
      margin-top:14px;
    }
    @media (max-width: 520px){ .heroGrid{grid-template-columns:1fr} }
    .mini{
      padding:14px;
      border-radius:18px;
      border:1px solid var(--border);
      background:rgba(15,25,51,.6);
    }
    .mini b{display:block; margin-bottom:6px}
    .mini p{margin:0; color:var(--muted); font-size:14px}
    .side h3{margin:4px 0 10px; font-size:18px}
    .callout{
      padding:16px;
      border-radius:18px;
      border:1px solid rgba(46,228,255,.25);
      background: linear-gradient(135deg, rgba(46,228,255,.12), rgba(124,92,255,.10));
    }
    .callout p{margin:8px 0 0; color:var(--muted); font-size:14px}
    .grid{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:16px;
      margin-top:18px;
    }
    @media (max-width: 900px){ .grid{grid-template-columns:1fr} }
    .card{
      background:rgba(15,25,51,.65);
      border:1px solid var(--border);
      border-radius:var(--radius);
      padding:18px;
      box-shadow: 0 18px 50px rgba(0,0,0,.25);
    }
    .card h2{margin:0 0 8px; font-size:18px}
    .card ul{margin:10px 0 0; padding-left:18px; color:var(--muted)}
    .card li{margin:6px 0}
    .pillRow{display:flex; flex-wrap:wrap; gap:8px; margin-top:10px}
    .pill{
      font-size:12px;
      font-weight:700;
      color:rgba(245,247,255,.9);
      padding:8px 10px;
      border-radius:999px;
      border:1px solid rgba(124,92,255,.28);
      background:rgba(124,92,255,.12);
    }
    .sectionTitle{
      margin:34px 0 12px;
      display:flex; align-items:baseline; justify-content:space-between; gap:12px; flex-wrap:wrap;
    }
    .sectionTitle h2{margin:0; font-size:22px; letter-spacing:-.3px}
    .sectionTitle span{color:var(--muted); font-weight:600; font-size:14px}
    .quote{
      margin-top:20px;
      padding:18px 18px;
      border-radius:var(--radius);
      border:1px solid rgba(124,92,255,.28);
      background:rgba(124,92,255,.10);
      font-weight:800;
      font-size:18px;
      letter-spacing:-.2px;
    }
    footer{
      margin-top:26px;
      padding-top:18px;
      border-top:1px solid var(--border);
      color:var(--muted);
      font-size:13px;
      display:flex;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
    }
  </style>
</head>

<body>
  <div class="wrap">

    <div class="nav">
      <div class="brand"><span class="dot"></span> AINSE</div>
      <div class="links">
        <a href="#problem">Problem</a>
        <a href="#sdlc">SDLC</a>
        <a href="#governance">Governance</a>
        <a href="#benefits">Benefits</a>
        <a class="btn" href="#contact">Use this deck</a>
      </div>
    </div>

    <section class="hero" id="top">
      <div class="panel">
        <div class="kicker">AI-Native Software Engineering • Executive Brief</div>
        <h1>What changes when AI starts developing software?</h1>
        <p class="sub">
          We are entering an era where <b>software writes software</b>—but the real risk isn’t bad code.
          It’s <b>ungoverned decisions</b> when AI shifts from suggesting to deciding.
        </p>

        <div class="heroGrid">
          <div class="mini">
            <b>The pressure</b>
            <p>Release faster with fewer engineers—yet timelines still slip and rework grows.</p>
          </div>
          <div class="mini">
            <b>The shift</b>
            <p>From human approvals → policy + automation. Accountability must stay crystal clear.</p>
          </div>
        </div>

        <div class="pillRow" aria-label="keywords">
          <span class="pill">AI TRiSM</span>
          <span class="pill">Decision Gates</span>
          <span class="pill">Quality + Security Debt</span>
          <span class="pill">Orchestrator Engineers</span>
        </div>
      </div>

      <div class="panel side">
        <h3>Presented by</h3>
        <div class="callout">
          <b>Sahil Dua • Sunayana Hazarika</b>
          <p>
            Add your QR code + link to the executive brief here (optional).
          </p>
        </div>

        <div style="height:14px"></div>

        <div class="callout">
          <b>One-line takeaway</b>
          <p style="margin-top:10px; font-weight:800; color:rgba(245,247,255,.95)">
            AI-native engineering is inevitable. Un-governed autonomy is optional.
          </p>
        </div>
      </div>
    </section>

    <div class="sectionTitle" id="problem">
      <h2>The business problem</h2>
      <span>Speed gains can hide rework + reliability + security costs</span>
    </div>

    <div class="grid">
      <div class="card">
        <h2>Why leaders care</h2>
        <ul>
          <li>Pressure to ship faster—often with leaner teams</li>
          <li>Output increases, but duplication and maintainability risks can rise</li>
          <li>Security risk grows when autonomous outputs feed other agents</li>
        </ul>
      </div>

      <div class="card">
        <h2>The real risk: ungoverned decisions</h2>
        <ul>
          <li><b>Control shifts</b>: approvals → policies + automation</li>
          <li><b>Accountability blurs</b>: who owns an AI-made decision?</li>
          <li><b>Errors compound</b>: one agent’s output becomes another’s input</li>
        </ul>
      </div>
    </div>

    <div class="sectionTitle" id="sdlc">
      <h2>How AI transforms the SDLC</h2>
      <span>From requirements to deployment</span>
    </div>

    <div class="grid">
      <div class="card">
        <h2>AI across development</h2>
        <ul>
          <li>Code generation (autocomplete + synthesis)</li>
          <li>Bug detection (automated analysis + suggestions)</li>
          <li>Testing automation (smarter test generation)</li>
          <li>Documentation (auto-generated guides)</li>
          <li>Architecture design (optimal designs from requirements)</li>
          <li>Security enhancement (vulnerability detection)</li>
        </ul>
      </div>

      <div class="card">
        <h2>AI in each SDLC stage</h2>
        <ul>
          <li><b>Requirements</b>: ideas → specs via NLP</li>
          <li><b>Design</b>: architecture + UI suggestions</li>
          <li><b>Development</b>: real-time assistance</li>
          <li><b>Testing</b>: coverage + quality improvement</li>
          <li><b>Deployment</b>: predict failures, reduce downtime</li>
        </ul>
      </div>
    </div>

    <div class="sectionTitle" id="governance">
      <h2>Strategic recommendation</h2>
      <span>Pilot → decision gate → scale</span>
    </div>

    <div class="grid">
      <div class="card">
        <h2>Governance moves</h2>
        <ul>
          <li><b>Bias mitigation</b>: diverse data + fairness audits</li>
          <li><b>Human oversight</b>: keep manual skills + security reviews</li>
          <li><b>Transparency</b>: interpretable models + clear documentation</li>
          <li><b>Workforce development</b>: reskill toward AI collaboration + oversight</li>
        </ul>
      </div>

      <div class="card">
        <h2>The evolving developer role</h2>
        <ul>
          <li>From <b>coder</b> → <b>orchestrator</b></li>
          <li>Define direction, constraints, quality gates</li>
          <li>Guide outputs, oversee integration, refine requirements</li>
          <li>Strategic optimization across workflows</li>
        </ul>
      </div>
    </div>

    <div class="sectionTitle" id="benefits">
      <h2>Key benefits</h2>
      <span>Where ROI becomes real</span>
    </div>

    <div class="grid">
      <div class="card">
        <h2>Automation</h2>
        <p style="margin:0;color:var(--muted)">AI handles repetitive tasks so people focus on design + decisions.</p>
      </div>
      <div class="card">
        <h2>Improved quality</h2>
        <p style="margin:0;color:var(--muted)">Earlier bug detection + better testing reduces vulnerabilities and errors.</p>
      </div>
      <div class="card">
        <h2>Accelerated delivery</h2>
        <p style="margin:0;color:var(--muted)">Shorter cycles + faster iteration based on better predictions.</p>
      </div>
      <div class="card">
        <h2>Democratization</h2>
        <p style="margin:0;color:var(--muted)">Low/no-code enables more builders to create AI-powered apps.</p>
      </div>
    </div>

    <div class="quote">
      The biggest ROI isn’t “coding faster.” It’s reducing the hidden tax of rework + reliability + security debt.
    </div>

    <footer id="contact">
      <div><b>AINSE</b> • AI-Native Software Engineering</div>
      <div>Tip: add your deck link + executive brief link + QR code image here.</div>
    </footer>

  </div>
</body>
</html>
