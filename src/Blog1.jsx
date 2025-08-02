import React from 'react';
import "./WSLblog.css";
import { Navb } from "./pages/Home";

export default function WSLBlog() {
  return (
    <>
      <Navb />
      <div className="blog-container">
        <h1 style={{textAlign:"justify", fontSize:"3rem"}}>Why WSL is GOOD and WORST <br />decision at the same Time</h1>
      <div style={{height:"450px", width:"800px"}}>
        <img src="/pi1.png" style={{height:"100%", width:"100%"}} alt='goto'/>
      </div>
      <h1 className="heading">What Is WSL?</h1>
      <p>
        WSL allows you to run Linux inside Windows, without dual booting or using a full-blown VM.
        You get a real Linux terminal, can install Linux tools and packages, and even run VS Code with a remote WSL environment.
      </p>
      <p>
        Is it as good as full Linux? <strong>Nah.</strong><br />
        But is it good enough for daily dev stuff like using Git, Python, Node.js, etc.? <strong>Absolutely.</strong>
      </p>

      <h1 className="heading">WHY I Installed WSL</h1>
      <p>
        Okay so lets cover <strong>WHY</strong> first.<br />
        If you're even into tech, you eventually hear this everywhere:<br />
        <em>"Bro shift to Linux or Mac. Windows is trash for dev work."</em><br />
        And... they’re not wrong 💀
      </p>
      <p>
        But here’s my reality:<br />
        I’m too broke for mac 💸<br />
        Linux? I love, but it doesn’t support Premiere Pro, After Effects, or DaVinci which I use daily.
      </p>
      <p>
        Basically, I can't ditch Windows.<br />
        But I still need Linux tools for dev.<br />
        So I had 2 options:
      </p>

      <h2>🛑 Dual Boot?</h2>
      <p>
        Would’ve loved to. Dual boot is legit the best.<br />
        But I don’t have enough storage for that. 😭<br />
        (And also... I’m lazy to reboot every time.)
      </p>

      <h2>🟡 WSL?</h2>
      <p>
        WSL (Windows Subsystem for Linux) is like diet Linux that runs inside Windows.<br />
        It’s not perfect, but it works.<br />
        You get a Linux terminal, can use <code>apt</code>, <code>bash</code>, and even run VS Code in WSL mode.
      </p>
      <p>
        So yeah—this is what I did. Also, you can too.
      </p>

      <h1 className="heading">HOW I INSTALLED WSL</h1>
      <p>
        <strong>Step 1:</strong> Open PowerShell as admin<br />
        Yeah don’t skip the admin part.
      </p>
      <p>
        <strong>Step 2:</strong> Type this and hit enter:
      </p>
      <pre><code>wsl --install</code></pre>
      <p>Congrats. You just installed WSL. But you’re not done yet.</p>

      <h2>📦 Install a Linux Distro</h2>
      <p>
        WSL is just the shell. You still need a Linux distribution to work with.
      </p>
      <ul className='distro-list'>
        <li>Ubuntu (the default, safe choice)</li>
        <li>Kali Linux (if you want hacker vibes)</li>
        <li>Debian</li>
        <li>OpenSUSE</li>
        <li>etc.</li>
      </ul>
      <p>
        But most probably, like me, you’ll use Ubuntu.<br />
        So type this in your terminal:
      </p>
      <pre><code>wsl --install -d ubuntu</code></pre>
      <p>If you want any other distro, just change “ubuntu” to that. Like:</p>
      <pre><code>wsl --install -d kali-linux</code></pre>

      <h2>After Installation</h2>
      <p>
        Open Ubuntu from Start Menu (it takes a sec to set up on first run)<br />
        It’ll ask you to create a UNIX username and password<br />
        That’s your Linux account now<br />
        <strong>Boom. You're inside Linux... kinda.</strong>
      </p>
    </div>
  </>
  );
}
