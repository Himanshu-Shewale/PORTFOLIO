/*
  HIMANSHU SHEWALE — CYBERSECURITY PORTFOLIO
  Replace the placeholder URLs below with your real public links.
  Keep API keys and other secrets out of this public repository.
*/

const PROFILE_LINKS = {
  github: "https://github.com/",              // TODO: Replace with your GitHub profile
  linkedin: "https://www.linkedin.com/",      // TODO: Replace with your LinkedIn profile
  tryhackme: "https://tryhackme.com/",        // TODO: Replace with your TryHackMe profile
  email: "your-email@example.com"             // TODO: Replace with your email address
};

const PROJECTS = {
  phishing: {
    number: "PROJECT_01 / EMAIL SECURITY",
    title: "Phishing Email Investigation & IOC Analysis",
    summary: "A structured investigation of a simulated suspicious email, focused on tracing the sender, examining links, extracting indicators of compromise, and recording an evidence-based verdict.",
    tags: ["Email header analysis", "VirusTotal", "CyberChef", "URL / domain analysis"],
    blocks: [
      { title: "What was the project?", icon: "01", text: "A phishing investigation exercise that follows the kind of triage a security operations analyst might perform after an employee reports a suspicious message." },
      { title: "Why I built it", icon: "02", text: "To understand how to move from a suspicious email to a defensible conclusion, instead of relying on visual clues or assumptions alone." },
      { title: "Objective", icon: "03", text: "Analyse a simulated phishing email, identify relevant indicators of compromise (IOCs), assess the evidence, and document the investigation." },
      { title: "Tools & techniques", icon: "04", list: ["Email header analysis", "Sender and sending-infrastructure review", "URL and domain analysis", "VirusTotal threat-intelligence checks", "CyberChef for safe data transformation"] },
      { title: "What I did", icon: "05", list: ["Reviewed the email headers and sender details", "Examined sending infrastructure and suspicious links", "Extracted URLs and other potential IOCs", "Checked indicators against threat-intelligence sources", "Documented evidence and reached a final verdict"] },
      { title: "Skills developed", icon: "06", list: ["Suspicious-email triage", "IOC extraction and analysis", "Threat-intelligence research", "Evidence-based reasoning", "Clear investigation documentation"] },
      { title: "Outcome & real-world relevance", icon: "07", text: "Produced a structured phishing investigation report containing evidence, analysis, and a final verdict. This workflow is relevant to email-security triage and initial SOC investigations." },
      { title: "Evidence", icon: "08", evidence: ["Investigation report", "Analysis screenshots", "Sample email headers", "IOC list"] }
    ],
    footer: "Only use sanitised, safe-to-share samples. Remove personal data, live malicious links, tokens, and other sensitive information before publishing."
  },
  soc: {
    number: "PROJECT_02 / SECURITY OPERATIONS",
    title: "Building a Mini SOC Lab for Threat Detection",
    summary: "A small home lab designed to generate Windows security events, collect telemetry, search it in Splunk, and explore a basic detection for suspicious PowerShell activity.",
    tags: ["Windows VM", "Sysmon", "Splunk", "Windows Event Logs", "PowerShell"],
    blocks: [
      { title: "What was the project?", icon: "01", text: "A personal lab that simulates parts of a security operations workflow: generate events, collect logs, search activity, and investigate behaviour that may deserve attention." },
      { title: "Why I built it", icon: "02", text: "To understand how analysts work with telemetry and how a detection can be built from observable activity rather than theory alone." },
      { title: "Objective", icon: "03", text: "Build a small environment for collecting Windows events and investigating suspicious activity, with a basic detection query as a practical outcome." },
      { title: "Tools & technologies", icon: "04", list: ["Windows virtual machine", "Sysmon for endpoint telemetry", "Splunk for log search and analysis", "Windows Event Logs", "PowerShell for controlled event generation"] },
      { title: "What I did", icon: "05", list: ["Set up a Windows virtual machine", "Installed and configured Sysmon", "Generated test security events", "Collected and searched logs in Splunk", "Investigated suspicious PowerShell activity", "Created a basic detection query"] },
      { title: "Skills developed", icon: "06", list: ["Windows security logging", "SIEM fundamentals", "Log analysis and investigation", "Detection engineering basics", "Understanding event context and triage"] },
      { title: "Outcome & real-world relevance", icon: "07", text: "Built a working home SOC environment and a basic detection for suspicious PowerShell activity. The workflow mirrors foundational SOC tasks such as log review, alert investigation, and detection refinement." },
      { title: "Evidence", icon: "08", evidence: ["Lab architecture diagram", "Lab screenshots", "Splunk detection query", "Sample logs", "Investigation notes", "GitHub repository"] }
    ],
    footer: "Describe the exact detection logic and its limitations in your write-up. A basic rule is a learning artefact, not a production-ready detection."
  },
  ioc: {
    number: "PROJECT_03 / SECURITY AUTOMATION",
    title: "Python IOC Enrichment Tool",
    summary: "A proof-of-concept Python utility that accepts an indicator, queries a threat-intelligence API, parses JSON, and presents investigation context in an analyst-friendly format.",
    tags: ["Python", "REST APIs", "JSON", "VirusTotal API", "GitHub"],
    blocks: [
      { title: "What was the project?", icon: "01", text: "A small command-line tool to help enrich an indicator of compromise—such as an IP address, domain, or file hash—with context from a threat-intelligence service." },
      { title: "Why I built it", icon: "02", text: "Analysts can spend time repeating lookups across different sources. I wanted to automate one part of that initial research and practise building a useful security utility." },
      { title: "Objective", icon: "03", text: "Accept an IOC as input, call a threat-intelligence API, parse the response, and display selected information in a readable format." },
      { title: "Tools & technologies", icon: "04", list: ["Python", "REST API requests", "JSON response parsing", "VirusTotal API", "GitHub for version control and project evidence"] },
      { title: "What I did", icon: "05", list: ["Created a script that accepts an IOC", "Connected it to a threat-intelligence API", "Parsed the JSON response", "Extracted useful fields for review", "Displayed results in a simple analyst-friendly format", "Added basic error handling"] },
      { title: "Skills developed", icon: "06", list: ["Python scripting for security", "API integration", "JSON parsing", "Automating repetitive tasks", "Error handling and documentation"] },
      { title: "Outcome & real-world relevance", icon: "07", text: "Created a proof-of-concept IOC enrichment tool intended to speed up initial research. The same pattern can support analyst workflows, while any production use would need rate-limit handling, validation, secure secret management, and careful interpretation of source data." },
      { title: "Evidence", icon: "08", evidence: ["GitHub repository", "Source code", "Terminal screenshots", "Example API response", "Short demo"] }
    ],
    footer: "Never commit API keys to GitHub. Use environment variables locally, document setup safely, and avoid uploading sensitive indicators or investigation data."
  }
};

const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const toast = document.querySelector("#toast");
let toastTimeout;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function safeExternalLink(url) {
  try {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}

function syncProfileLinks() {
  document.querySelectorAll("[data-link]").forEach((anchor) => {
    const key = anchor.dataset.link;
    const value = PROFILE_LINKS[key];
    if (!value) return;

    if (key === "email") {
      const cleanEmail = value.trim();
      anchor.href = `mailto:${cleanEmail}`;
      if (cleanEmail === "your-email@example.com") {
        anchor.addEventListener("click", (event) => {
          event.preventDefault();
          showToast("Add your real email address in script.js first.");
        });
      }
      return;
    }

    anchor.href = value;
    if (!safeExternalLink(value) || value.endsWith("github.com/") ||
        value.endsWith("linkedin.com/") || value.endsWith("tryhackme.com/")) {
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        showToast("Replace this placeholder with your personal profile URL in script.js.");
      });
    }
  });
}

function renderProject(project) {
  const tags = project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("");
  const blocks = project.blocks.map((block) => {
    let content = "";
    if (block.list) {
      content = `<ul>${block.list.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
    } else if (block.evidence) {
      content = `<div class="evidence-list">${block.evidence.map((item) =>
        `<span class="evidence-item"><span>${escapeHTML(item)}</span><span class="evidence-status">ADD LINK</span></span>`
      ).join("")}</div>`;
    } else {
      content = `<p>${escapeHTML(block.text)}</p>`;
    }
    const wide = block.title === "What I did" || block.title === "Evidence" || block.title === "Outcome & real-world relevance";
    return `<section class="detail-block${wide ? " wide" : ""}"><h3><span>${escapeHTML(block.icon)}</span>${escapeHTML(block.title)}</h3>${content}</section>`;
  }).join("");

  dialogContent.innerHTML = `
    <p class="dialog-project-kicker">${escapeHTML(project.number)}</p>
    <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
    <p class="dialog-lead">${escapeHTML(project.summary)}</p>
    <div class="dialog-meta">${tags}</div>
    <div class="dialog-sections">${blocks}</div>
    <p class="dialog-footer-note">${escapeHTML(project.footer)}</p>
  `;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else showToast("Project details are not supported by this browser. Please use a modern browser.");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = PROJECTS[button.dataset.project];
    if (project) renderProject(project);
  });
});

document.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog?.open) dialog.close();
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav?.classList.toggle("is-open", !isOpen);
});
nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelectorAll("[data-placeholder]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(`Add the real ${link.dataset.placeholder.toLowerCase()} in index.html before publishing.`);
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
syncProfileLinks();
