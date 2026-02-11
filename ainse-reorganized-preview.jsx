import React, { useEffect, useState } from 'react';

export default function AINSEWebsite() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e14] text-[#e6edf3] font-mono overflow-x-hidden">
      {/* Animated Background Grid */}
      <div 
        className="fixed inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridScroll 20s linear infinite'
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');
        
        * {
          font-family: 'JetBrains Mono', monospace;
        }
        
        @keyframes gridScroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 217, 255, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(0, 217, 255, 0); }
        }
        
        @keyframes shimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #00d9ff 0%, #7000ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .pulse-border {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 border-b border-[#2d3540]"
        style={{
          background: scrollY > 100 ? 'rgba(10, 14, 20, 0.95)' : 'rgba(10, 14, 20, 0.9)',
          backdropFilter: 'blur(10px)',
          transition: 'background 0.3s ease'
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-1 font-['Syne'] text-2xl font-extrabold">
            <span className="text-[#00d9ff] text-3xl">[</span>
            <span className="gradient-text">AINSE</span>
            <span className="text-[#00d9ff] text-3xl">]</span>
          </div>
          <ul className="hidden md:flex gap-8 text-sm">
            {['What is AINSE', 'The Problem', 'Applications', 'SDLC', 'Strategy', 'Benefits'].map(item => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-[#8b949e] hover:text-[#00d9ff] transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d9ff] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section - SLIDE 1 */}
      <section className="relative min-h-screen flex items-center px-8 pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="inline-block text-xs tracking-widest uppercase text-[#00d9ff] border border-[#00d9ff] px-4 py-2 mb-6 pulse-border">
            EMERGING TECHNOLOGY BRIEFING
          </div>
          
          <h1 className="font-['Syne'] text-5xl md:text-7xl font-extrabold leading-tight mb-2 tracking-tight">
            AI Native Software<br />
            <span className="gradient-text">Engineering</span>{' '}
            <span className="text-3xl md:text-5xl text-[#8b949e]">(AINSE)</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#8b949e] mb-4">
            What changes when AI starts developing softwares?
          </p>
          
          <p className="text-sm text-[#8b949e] mb-8">
            Presented by: Sahil Dua, Sunayana Hazarika
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#00d9ff] text-[#0a0e14] px-8 py-3 text-sm font-bold border-2 border-[#00d9ff] hover:bg-transparent hover:text-[#00d9ff] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00d9ff]/30">
              Explore AINSE
            </button>
            <button className="bg-transparent text-[#e6edf3] px-8 py-3 text-sm font-bold border-2 border-[#2d3540] hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-300 hover:-translate-y-0.5">
              The Business Case
            </button>
          </div>
        </div>

        {/* Code Window */}
        <div 
          className="absolute right-[-10%] top-1/2 w-1/2 max-w-2xl opacity-60 hidden lg:block"
          style={{ transform: `translateY(calc(-50% + ${scrollY * 0.3}px))` }}
        >
          <div className="bg-[#1c2128] border border-[#2d3540] rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-[#151921] px-4 py-3 flex items-center gap-2 border-b border-[#2d3540]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-auto text-xs text-[#8b949e]">ai_agent.py</span>
            </div>
            <div className="p-6 text-sm leading-relaxed">
              <pre className="text-left">
                <code>
                  <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">autonomous_develop</span>():
                  {'\n    '}<span className="text-[#8b949e]"># AI writes software</span>
                  {'\n    '}requirements = <span className="text-[#d2a8ff]">parse_natural_language</span>()
                  {'\n    '}architecture = <span className="text-[#d2a8ff]">design_system</span>(requirements)
                  {'\n    '}code = <span className="text-[#d2a8ff]">generate_production_code</span>(architecture)
                  {'\n    '}tests = <span className="text-[#d2a8ff]">create_test_suite</span>(code)
                  {'\n    '}
                  {'\n    '}<span className="text-[#ff7b72]">return</span> <span className="text-[#d2a8ff]">deploy</span>(code, tests)
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* What is AINSE - SLIDE 2 & 3 */}
      <section id="what-is-ainse" className="relative py-24 px-8 z-10 bg-gradient-to-br from-[#00d9ff]/2 to-[#7000ff]/2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-['Syne'] text-7xl font-extrabold text-[#00d9ff] opacity-20">01</span>
            <h2 className="font-['Syne'] text-5xl font-extrabold">What is AINSE?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="text-xs font-bold tracking-wider text-[#00d9ff] mb-4">AI IN DEVELOPMENT</div>
              <p className="text-2xl text-[#00d9ff] font-bold mb-6 leading-tight">
                We are entering an era where software writes software.
              </p>
              <p className="text-[#8b949e] text-lg leading-relaxed">
                AI-Native Software Engineering (AINSE) represents a fundamental shift in how software is created. 
                Unlike traditional development tools that assist human developers, AINSE enables autonomous or 
                semi-autonomous execution of software engineering tasks by AI agents integrated throughout the 
                Software Development Life Cycle (SDLC).
              </p>
            </div>
            
            <div className="bg-[#1c2128] border border-[#2d3540] rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">📱</div>
              <p className="text-sm text-[#8b949e] mb-4 leading-relaxed">
                Scan the QR Code<br/>for the executive brief
              </p>
              <div className="w-40 h-40 mx-auto border-2 border-dashed border-[#00d9ff] rounded-lg bg-gradient-to-br from-[#00d9ff]/10 to-[#7000ff]/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Problem - SLIDE 4 (MOVED UP!) */}
      <section id="the-problem" className="relative py-24 px-8 z-10 bg-[#151921]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-['Syne'] text-7xl font-extrabold text-[#00d9ff] opacity-20">02</span>
            <h2 className="font-['Syne'] text-5xl font-extrabold">The Business Problem</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#1c2128] border border-[#2d3540] border-l-4 border-l-[#f2cc60] p-8 rounded-lg">
              <div className="text-xs font-bold tracking-wider mb-4 opacity-70">THE PRESSURE</div>
              <h3 className="font-['Syne'] text-2xl mb-6">Release faster with fewer engineers</h3>
              <div className="bg-[#f2cc60]/10 border border-[#f2cc60] p-6 rounded-lg text-center">
                <div className="font-['Syne'] text-6xl font-extrabold text-[#f2cc60] mb-2">79%</div>
                <p className="text-sm mb-1">report software release missing timelines</p>
                <p className="text-xs text-[#8b949e]">Industry reality (Forrester 2024)</p>
              </div>
            </div>
            
            <div className="bg-[#1c2128] border border-[#2d3540] border-l-4 border-l-[#ff4f6d] p-8 rounded-lg">
              <div className="text-xs font-bold tracking-wider mb-4 opacity-70">THE REALITY</div>
              <h3 className="font-['Syne'] text-2xl mb-4">Speed gains offset by rework, defects, and security risk</h3>
              <p className="text-[#8b949e] mb-2">GenAI copilots increase output, but code duplication and maintainability rise risk</p>
              <p className="text-xs text-[#8b949e] italic">(McKinsey research)</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#ff4f6d]/10 to-[#7000ff]/10 border border-[#ff4f6d] p-8 rounded-lg">
            <h3 className="font-['Syne'] text-3xl mb-4 text-[#ff4f6d]">
              The Real Risk Isn't Bad Code — It's Ungoverned Decisions
            </h3>
            <p className="text-lg mb-6">When GenAI shifts from suggesting to deciding:</p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-3">⚠️</div>
                <strong className="font-['Syne'] text-lg block mb-2">Control shifts</strong>
                <p className="text-sm text-[#8b949e]">From human approvals → policy + automation</p>
              </div>
              <div>
                <div className="text-4xl mb-3">❓</div>
                <strong className="font-['Syne'] text-lg block mb-2">Accountability blurs</strong>
                <p className="text-sm text-[#8b949e]">Who owns an AI-made decision?</p>
              </div>
              <div>
                <div className="text-4xl mb-3">🔁</div>
                <strong className="font-['Syne'] text-lg block mb-2">Errors compound</strong>
                <p className="text-sm text-[#8b949e]">One agent's output feeds another</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications - SLIDE 5 */}
      <section id="applications" className="relative py-24 px-8 z-10 bg-gradient-to-br from-[#00d9ff]/2 to-[#7000ff]/2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-['Syne'] text-7xl font-extrabold text-[#00d9ff] opacity-20">03</span>
            <h2 className="font-['Syne'] text-5xl font-extrabold">AI Applications Across Development</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💻', title: 'Code Generation', desc: 'Autocompletion and synthesis from natural language descriptions' },
              { icon: '🐛', title: 'Bug Detection', desc: 'Automated analysis and real-time correction suggestions' },
              { icon: '🧪', title: 'Testing Automation', desc: 'Intelligent test case generation and optimization' },
              { icon: '📚', title: 'Documentation', desc: 'Auto-generated API guides and code explanations' },
              { icon: '🏗️', title: 'Architecture Design', desc: 'Optimal system designs based on requirements' },
              { icon: '🔒', title: 'Security Enhancement', desc: 'Vulnerability identification and mitigation strategies' }
            ].map((app, i) => (
              <div 
                key={i}
                className="bg-[#1c2128] border border-[#2d3540] p-6 rounded-lg hover:border-[#00d9ff] hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-[#00d9ff]/15"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{app.icon}</span>
                  <h3 className="font-['Syne'] text-xl font-bold">{app.title}</h3>
                </div>
                <p className="text-sm text-[#8b949e] leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDLC - SLIDE 6 */}
      <section id="sdlc" className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-['Syne'] text-7xl font-extrabold text-[#00d9ff] opacity-20">04</span>
            <h2 className="font-['Syne'] text-5xl font-extrabold">AI Transforming the SDLC</h2>
          </div>
          
          <div className="max-w-3xl space-y-0">
            {[
              { num: '1', title: 'Requirements', desc: 'Natural language processing converts ideas to specifications' },
              { num: '2', title: 'Design', desc: 'Architecture suggestions and UI mockups generated instantly' },
              { num: '3', title: 'Development', desc: 'Code generation and real-time assistance accelerates coding' },
              { num: '4', title: 'Testing', desc: 'Automated test generation improves coverage and quality' },
              { num: '5', title: 'Deployment', desc: 'CI/CD optimization predicts failures and reduces downtime' }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0 w-16 h-16 border-2 border-[#00d9ff] rounded-full flex items-center justify-center font-['Syne'] text-2xl font-extrabold text-[#00d9ff] bg-[#0a0e14] z-10">
                    {item.num}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-['Syne'] text-2xl mb-2">{item.title}</h3>
                    <p className="text-[#8b949e]">{item.desc}</p>
                  </div>
                </div>
                {i < 4 && (
                  <div className="ml-8 w-0.5 h-10 bg-gradient-to-b from-[#00d9ff] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy - SLIDE 7 */}
      <section id="strategy" className="relative py-24 px-8 z-10 bg-[#151921]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-['Syne'] text-7xl font-extrabold text-[#00d9ff] opacity-20">05</span>
            <h2 className="font-['Syne'] text-5xl font-extrabold">Strategic Recommendation</h2>
          </div>
          
          <div className="bg-gradient-to-br from-[#00d9ff]/10 to-[#7000ff]/10 border-2 border-[#00d9ff] p-8 rounded-lg mb-12">
            <p className="font-['Syne'] text-2xl font-bold text-[#00d9ff] text-center leading-relaxed">
              The biggest ROI isn't "coding faster." It's reducing the hidden tax of rework + reliability + security debt created when autonomous systems operate without proper governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: '⚖️', title: 'Bias Mitigation', desc: 'Use diverse training data and conduct regular fairness audits to prevent discriminatory outcomes' },
              { icon: '👁️', title: 'Human Oversight', desc: 'Maintain manual coding skills and conduct security reviews of AI-generated code' },
              { icon: '📋', title: 'Transparency', desc: 'Apply interpretable models and clear documentation protocols for accountability' },
              { icon: '🎓', title: 'Workforce Development', desc: 'Invest in reskilling programs to transition roles toward AI collaboration and oversight' }
            ].map((rec, i) => (
              <div 
                key={i}
                className="bg-[#1c2128] border border-[#2d3540] p-8 rounded-lg hover:border-[#00d9ff] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{rec.icon}</div>
                <h3 className="font-['Syne'] text-xl mb-4">{rec.title}</h3>
                <p className="text-sm text-[#8b949e] leading-relaxed">{rec.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1c2128] border border-[#2d3540] p-10 rounded-lg">
            <h3 className="font-['Syne'] text-2xl mb-8 text-center">Implementation Approach</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center flex-1 min-w-[200px]">
                <div className="font-['Syne'] text-3xl font-extrabold text-[#00d9ff] mb-2">PILOT</div>
                <p className="text-[#8b949e]">AI TRiSM with Decision Gate</p>
              </div>
              <div className="text-4xl text-[#00d9ff]">→</div>
              <div className="text-center flex-1 min-w-[200px]">
                <div className="font-['Syne'] text-3xl font-extrabold text-[#00d9ff] mb-2">SCALE</div>
                <p className="text-[#8b949e]">Governed Autonomy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Role - SLIDE 8 */}
      <section className="relative py-24 px-8 z-10 bg-gradient-to-br from-[#00d9ff]/2 to-[#7000ff]/2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-['Syne'] text-7xl font-extrabold text-[#00d9ff] opacity-20">06</span>
            <h2 className="font-['Syne'] text-5xl font-extrabold">The Evolving Role of a Developer</h2>
          </div>
          
          <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
            <div className="flex-1 min-w-[250px] text-center bg-[#1c2128] border border-[#2d3540] border-l-4 border-l-[#8b949e] p-6 rounded-lg">
              <h3 className="font-['Syne'] text-2xl mb-4">From Coder</h3>
              <p className="text-[#8b949e]">Writing every line of code manually</p>
            </div>
            
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-[#00d9ff] flex-shrink-0">
              <path d="M10 30 L50 30 M40 20 L50 30 L40 40" stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
            
            <div className="flex-1 min-w-[250px] text-center bg-[#1c2128] border border-[#2d3540] border-l-4 border-l-[#00d9ff] p-6 rounded-lg">
              <h3 className="font-['Syne'] text-2xl mb-4">To Orchestrator</h3>
              <p className="text-[#8b949e]">Defining direction, setting constraints, and enforcing quality gates</p>
            </div>
          </div>

          <div className="bg-[#1c2128] border border-[#2d3540] p-8 rounded-lg mb-8">
            <p className="text-lg text-[#8b949e] leading-relaxed">
              AI enables developers to co-create, shifting their role from writing every line of code to 
              orchestrating intelligent agents - defining direction, setting constraints, and enforcing quality 
              gates while agents handle execution.
            </p>
          </div>

          <div className="bg-[#1c2128] border border-[#2d3540] p-8 rounded-lg mb-8">
            <h3 className="font-['Syne'] text-2xl mb-6">New Responsibilities</h3>
            <ul className="space-y-3">
              {[
                'Guiding AI-generated outputs and ensuring quality',
                'Managing AI integration across development workflows',
                'Refining technical requirements and specifications',
                'Overseeing system architecture and integration',
                'Strategic decision-making and optimization'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[#8b949e]">
                  <span className="text-[#00d9ff] text-xl flex-shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#00d9ff]/5 to-[#7000ff]/5 border border-[#00d9ff] p-10 rounded-lg text-center">
            <p className="font-['Syne'] text-3xl font-bold text-[#00d9ff] leading-snug">
              "AI-native engineering is inevitable. Un-governed autonomy is optional."
            </p>
          </div>
        </div>
      </section>

      {/* Benefits - SLIDE 9 */}
      <section id="benefits" className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-['Syne'] text-7xl font-extrabold text-[#00d9ff] opacity-20">07</span>
            <h2 className="font-['Syne'] text-5xl font-extrabold">Key Benefits</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: 'Automation', desc: 'AI automates repetitive work allowing developers to focus on higher-value design and decisions.' },
              { icon: '✨', title: 'Improved Quality', desc: 'Early bug detection, comprehensive testing coverage, and optimized code reduce vulnerabilities and errors.' },
              { icon: '🚀', title: 'Accelerated Delivery', desc: 'Faster development cycles, quicker time-to-market, and rapid iteration based on accurate predictions.' },
              { icon: '🌐', title: 'Democratization', desc: 'No-code/low-code platforms enable non-technical users to build AI-powered applications with ease.' }
            ].map((benefit, i) => (
              <div 
                key={i}
                className="bg-[#1c2128] border border-[#2d3540] p-6 rounded-lg text-center hover:border-[#3fb950] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="font-['Syne'] text-xl mb-4">{benefit.title}</h3>
                <p className="text-sm text-[#8b949e] leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You - SLIDE 10 */}
      <section className="relative py-32 px-8 z-10 bg-[#151921] min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <h2 className="font-['Syne'] text-7xl md:text-9xl font-extrabold gradient-text mb-8">
            Thank You!
          </h2>
          <p className="text-2xl mb-4">Sahil Dua & Sunayana Hazarika</p>
          <p className="text-lg text-[#8b949e] mb-8">AI-Native Software Engineering</p>
          <button className="bg-transparent text-[#e6edf3] px-8 py-3 text-sm font-bold border-2 border-[#2d3540] hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-300">
            Review Presentation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151921] border-t border-[#2d3540] py-12 px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-1 font-['Syne'] text-2xl font-extrabold mb-2">
              <span className="text-[#00d9ff] text-3xl">[</span>
              <span className="gradient-text">AINSE</span>
              <span className="text-[#00d9ff] text-3xl">]</span>
            </div>
            <p className="text-sm text-[#8b949e]">AI-Native Software Engineering</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#8b949e]">Presented by Sahil Dua & Sunayana Hazarika</p>
            <p className="font-['Syne'] font-bold text-[#00d9ff] mt-2">2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
