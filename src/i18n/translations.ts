export type Lang = 'vi' | 'en' | 'zh'

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'vi', label: 'VI' },
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
]

export type Dictionary = {
  nav: { about: string; method: string; projects: string; research: string; lab: string; talk: string }
  openMenu: string
  closeMenu: string
  brandBlurb: [string, string, string, string]
  roleLine1: string
  roleLine2: string
  whatIDo: string
  whatIDoBody: string
  servicesLabel: string
  serviceList: string[]
  hero: {
    line1: string
    pixel1: string
    mid: string
    line3: string
    pixel2: string
  }
  enterBriefing: string
  aboutCta: string
  openToWork: string
  scheduleCall: string
  scroll: string
  basedIn: string
  basedInVal: string
  marqueeItems: string[]
  aboutLabel: string
  aboutTitle1: string
  aboutTitle2: string
  aboutP1: string
  aboutP2: string
  statOps: string
  statRules: string
  statAgents: string
  methodLabel: string
  methodTitle: string
  methodSteps: { step: string; title: string; text: string }[]
  capsLabel: string
  capsTitle: string
  services: { title: string; desc: string }[]
  projectsLabel: string
  projectsTitle: string
  caseStudy: string
  projects: { id: string; tag: string; title: string; text: string }[]
  labLabel: string
  labTitle: string
  labBody: string
  labTags: string[]
  talkLabel: string
  talkTitle: string
  talkBody: string
  scheduleCta: string
  contactEmail: string
  contactGithub: string
  contactCopy: string
  contactCopied: string
  contactChannels: string
  contactOpenProfile: string
  backTop: string
  footerStats: string
  audio: string
  audioOn: string
  audioOff: string
  playMusic: string
  pauseMusic: string
  nextTrack: string
  ytError: string
  pageTitle: string
}

export const translations: Record<Lang, Dictionary> = {
  en: {
    nav: {
      about: 'ABOUT',
      method: 'METHOD',
      projects: 'PROJECTS',
      research: 'RESEARCH',
      lab: 'LAB',
      talk: 'TALK',
    },
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    brandBlurb: [
      'xyanua is my',
      'operator handle - built',
      'around breaking systems',
      '"to make them safer"',
    ],
    roleLine1: 'CYBER &',
    roleLine2: 'AI ENGINEER',
    whatIDo: 'What I Do',
    whatIDoBody:
      'I design adversarial-ready defenses and intelligent agents for high-stakes digital systems',
    servicesLabel: 'Services',
    serviceList: [
      'Threat Modeling & Red Teaming',
      'AI Agent Engineering',
      'Secure App Development',
      'LLM Security / Prompt Defense',
      'Detection Engineering / SIEM',
      'Automation & SOAR',
    ],
    hero: {
      line1: 'I BRING THE',
      pixel1: 'ADVERSARIAL',
      mid: 'TO',
      line3: 'SECURITY & AI',
      pixel2: 'SYSTEMS',
    },
    enterBriefing: 'ENTER BRIEFING',
    aboutCta: 'About me',
    openToWork: 'Open to freelance, contract or full-time.',
    scheduleCall: 'Schedule a call',
    scroll: 'Scroll',
    basedIn: 'Based in',
    basedInVal: 'Vietnam',
    marqueeItems: [
      'Red Teaming',
      'Threat Modeling',
      'AI Agents',
      'LLM Security',
      'Detection Engineering',
      'SIEM / SOAR',
      'Secure Apps',
      'Adversarial Thinking',
    ],
    aboutLabel: '01 — About',
    aboutTitle1: 'Operator mindset.',
    aboutTitle2: 'Builder instincts.',
    aboutP1:
      "I'm xyanua — a cybersecurity & AI engineer focused on systems that get attacked for real: identity, cloud, apps, and the new attack surface around LLMs and autonomous agents.",
    aboutP2:
      'My default loop is simple: assume breach, prove impact, then design defenses and agents that shorten detection and response without drowning teams in noise.',
    statOps: 'Red team ops',
    statRules: 'Detection rules',
    statAgents: 'AI agents',
    methodLabel: '02 — Method',
    methodTitle: 'How engagements actually move',
    methodSteps: [
      {
        step: '01',
        title: 'Recon the blast radius',
        text: 'Map assets, trust boundaries, and what actually hurts if it breaks — not a generic checklist.',
      },
      {
        step: '02',
        title: 'Break it on purpose',
        text: 'Red team the weak points. Abuse AI agents. Prove exploitability with evidence, not vibes.',
      },
      {
        step: '03',
        title: 'Rebuild the defense',
        text: 'Ship detections, patches, and agent guardrails that survive the next creative attacker.',
      },
      {
        step: '04',
        title: 'Measure & iterate',
        text: 'Track MTTD/MTTR, false positives, and agent eval scores so security keeps compounding.',
      },
    ],
    capsLabel: '03 — Capabilities',
    capsTitle: 'Security depth meets AI systems work',
    services: [
      {
        title: 'Threat Modeling & Red Teaming',
        desc: 'Attack-path mapping, adversary emulation, and realistic breach simulations before attackers get there.',
      },
      {
        title: 'AI Agent Engineering',
        desc: 'Tool-using agents with guardrails, evals, and production-safe orchestration for security workflows.',
      },
      {
        title: 'Secure App Development',
        desc: 'Hardened React/Next stacks, auth boundaries, secrets hygiene, and secure-by-default APIs.',
      },
      {
        title: 'LLM Security / Prompt Defense',
        desc: 'Prompt injection resistance, output filtering, jailbreak testing, and model-facing abuse cases.',
      },
      {
        title: 'Detection Engineering / SIEM',
        desc: 'High-signal detections, triage playbooks, and noisy-alert cleanup that analysts can trust.',
      },
      {
        title: 'Automation & SOAR',
        desc: 'Response automation that shortens dwell time without waking the whole on-call rotation.',
      },
    ],
    projectsLabel: '04 — Selected work',
    projectsTitle: 'Signals from the lab',
    caseStudy: 'Case study →',
    projects: [
      {
        id: 'pathfinder',
        tag: 'RED TEAM',
        title: 'Adversarial pathfinder',
        text: 'Chained identity + cloud misconfigs into a full tenant takeover story for a fintech stack.',
      },
      {
        id: 'soc-copilot',
        tag: 'AI AGENT',
        title: 'SOC triage copilot',
        text: 'Agent that summarizes alerts, pulls context, and drafts containment steps with human approval gates.',
      },
      {
        id: 'prompt-armor',
        tag: 'LLM SEC',
        title: 'Prompt armor suite',
        text: 'Regression pack for injection, data exfil, and tool-abuse cases against production chat surfaces.',
      },
    ],
    labLabel: '05 — Lab',
    labTitle: 'Experiments on agents, detections, and exploit chains',
    labBody:
      'A living notebook of prompt-defense benches, SIEM rule packs, and red-team notes. More fragments shipping soon.',
    labTags: ['Prompt injection corpus', 'Cloud attack graphs', 'Agent eval harness'],
    talkLabel: '06 — Talk',
    talkTitle:
      "Need a sharper security edge — or an AI agent that doesn't freestyle into production risk?",
    talkBody:
      "Open to freelance, contract, or full-time. Tell me what you're defending and we'll scope the adversarial angle fast.",
    scheduleCta: 'EMAIL ME',
    contactEmail: 'Email',
    contactGithub: 'GitHub',
    contactCopy: 'Copy email',
    contactCopied: 'Copied',
    contactChannels: 'Direct channels',
    contactOpenProfile: 'Open profile →',
    backTop: 'BACK TO TOP',
    footerStats: '3 red team ops • 47 detection rules • 12 AI agents',
    audio: 'AUDIO',
    audioOn: 'ON',
    audioOff: 'OFF',
    playMusic: 'Play music',
    pauseMusic: 'Pause music',
    nextTrack: 'Next track',
    ytError: "Can't play YouTube. Try disabling adblock or reload the page.",
    pageTitle: 'xyanua - Cybersecurity & AI Engineer',
  },

  vi: {
    nav: {
      about: 'GIỚI THIỆU',
      method: 'PHƯƠNG PHÁP',
      projects: 'DỰ ÁN',
      research: 'NĂNG LỰC',
      lab: 'LAB',
      talk: 'LIÊN HỆ',
    },
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    brandBlurb: [
      'xyanua là handle',
      'của tôi - xây dựng',
      'quanh việc phá hệ thống',
      '"để làm chúng an toàn hơn"',
    ],
    roleLine1: 'CYBER &',
    roleLine2: 'AI ENGINEER',
    whatIDo: 'Tôi làm gì',
    whatIDoBody:
      'Tôi thiết kế lớp phòng thủ sẵn sàng đối kháng và các agent thông minh cho hệ thống số rủi ro cao',
    servicesLabel: 'Dịch vụ',
    serviceList: [
      'Threat Modeling & Red Teaming',
      'AI Agent Engineering',
      'Phát triển ứng dụng bảo mật',
      'Bảo mật LLM / Prompt Defense',
      'Detection Engineering / SIEM',
      'Automation & SOAR',
    ],
    hero: {
      line1: 'TÔI MANG',
      pixel1: 'ADVERSARIAL',
      mid: 'VÀO',
      line3: 'SECURITY & AI',
      pixel2: 'SYSTEMS',
    },
    enterBriefing: 'VÀO BRIEFING',
    aboutCta: 'Giới thiệu',
    openToWork: 'Nhận freelance, hợp đồng hoặc full-time.',
    scheduleCall: 'Đặt lịch gọi',
    scroll: 'Cuộn xuống',
    basedIn: 'Đặt tại',
    basedInVal: 'Việt Nam',
    marqueeItems: [
      'Red Teaming',
      'Threat Modeling',
      'AI Agents',
      'LLM Security',
      'Detection Engineering',
      'SIEM / SOAR',
      'Secure Apps',
      'Adversarial Thinking',
    ],
    aboutLabel: '01 — Giới thiệu',
    aboutTitle1: 'Tư duy operator.',
    aboutTitle2: 'Bản năng builder.',
    aboutP1:
      'Tôi là xyanua — kỹ sư cybersecurity & AI tập trung vào những hệ thống bị tấn công thật: identity, cloud, ứng dụng, và bề mặt tấn công mới quanh LLM cùng autonomous agents.',
    aboutP2:
      'Vòng lặp mặc định của tôi rất đơn giản: giả định đã bị xâm nhập, chứng minh tác động, rồi thiết kế phòng thủ và agent rút ngắn phát hiện/ứng cứu mà không làm đội ngũ ngập trong nhiễu.',
    statOps: 'Chiến dịch red team',
    statRules: 'Detection rules',
    statAgents: 'AI agents',
    methodLabel: '02 — Phương pháp',
    methodTitle: 'Engagement thực tế diễn ra thế nào',
    methodSteps: [
      {
        step: '01',
        title: 'Do thám bán kính ảnh hưởng',
        text: 'Lập bản đồ tài sản, biên tin cậy và những gì thực sự đau nếu đổ — không phải checklist chung chung.',
      },
      {
        step: '02',
        title: 'Phá có chủ đích',
        text: 'Red team điểm yếu. Lạm dụng AI agents. Chứng minh khả năng khai thác bằng bằng chứng, không bằng cảm tính.',
      },
      {
        step: '03',
        title: 'Xây lại lớp phòng thủ',
        text: 'Ship detections, bản vá và guardrails cho agent sống sót trước kẻ tấn công sáng tạo kế tiếp.',
      },
      {
        step: '04',
        title: 'Đo lường & lặp lại',
        text: 'Theo dõi MTTD/MTTR, false positive và điểm eval agent để bảo mật tiếp tục cộng dồn.',
      },
    ],
    capsLabel: '03 — Năng lực',
    capsTitle: 'Chiều sâu bảo mật gặp công việc hệ thống AI',
    services: [
      {
        title: 'Threat Modeling & Red Teaming',
        desc: 'Ánh xạ đường tấn công, mô phỏng adversary và diễn tập breach thực tế trước khi kẻ xấu tới.',
      },
      {
        title: 'AI Agent Engineering',
        desc: 'Agent dùng tool với guardrails, evals và orchestration an toàn production cho workflow bảo mật.',
      },
      {
        title: 'Phát triển ứng dụng bảo mật',
        desc: 'Stack React/Next được harden, biên auth, vệ sinh secrets và API mặc định an toàn.',
      },
      {
        title: 'Bảo mật LLM / Prompt Defense',
        desc: 'Chống prompt injection, lọc output, test jailbreak và các kịch bản lạm dụng phía model.',
      },
      {
        title: 'Detection Engineering / SIEM',
        desc: 'Detection tín hiệu cao, playbook triage và dọn alert nhiễu để analyst tin dùng.',
      },
      {
        title: 'Automation & SOAR',
        desc: 'Tự động hóa phản ứng rút ngắn dwell time mà không đánh thức cả vòng on-call.',
      },
    ],
    projectsLabel: '04 — Công việc chọn lọc',
    projectsTitle: 'Tín hiệu từ lab',
    caseStudy: 'Case study →',
    projects: [
      {
        id: 'pathfinder',
        tag: 'RED TEAM',
        title: 'Adversarial pathfinder',
        text: 'Nối identity + misconfig cloud thành câu chuyện chiếm toàn bộ tenant cho stack fintech.',
      },
      {
        id: 'soc-copilot',
        tag: 'AI AGENT',
        title: 'SOC triage copilot',
        text: 'Agent tóm tắt alert, kéo ngữ cảnh và soạn bước phong tỏa với cổng duyệt của con người.',
      },
      {
        id: 'prompt-armor',
        tag: 'LLM SEC',
        title: 'Prompt armor suite',
        text: 'Bộ regression cho injection, data exfil và tool-abuse trên bề mặt chat production.',
      },
    ],
    labLabel: '05 — Lab',
    labTitle: 'Thí nghiệm về agents, detections và chuỗi exploit',
    labBody:
      'Sổ tay sống về prompt-defense benches, bộ rule SIEM và ghi chú red-team. Thêm mảnh sẽ ra mắt sớm.',
    labTags: ['Corpus prompt injection', 'Đồ thị tấn công cloud', 'Harness eval agent'],
    talkLabel: '06 — Liên hệ',
    talkTitle:
      'Cần cạnh bảo mật sắc hơn — hoặc một AI agent không tự ý tạo rủi ro production?',
    talkBody:
      'Nhận freelance, hợp đồng hoặc full-time. Cho tôi biết bạn đang bảo vệ gì, chúng ta sẽ khoanh góc adversarial nhanh.',
    scheduleCta: 'GỬI EMAIL',
    contactEmail: 'Email',
    contactGithub: 'GitHub',
    contactCopy: 'Sao chép email',
    contactCopied: 'Đã sao chép',
    contactChannels: 'Kênh liên hệ',
    contactOpenProfile: 'Mở hồ sơ →',
    backTop: 'VỀ ĐẦU TRANG',
    footerStats: '3 chiến dịch red team • 47 detection rules • 12 AI agents',
    audio: 'AUDIO',
    audioOn: 'BẬT',
    audioOff: 'TẮT',
    playMusic: 'Bật nhạc',
    pauseMusic: 'Tắt nhạc',
    nextTrack: 'Bài tiếp',
    ytError: 'Không phát được YouTube. Thử tắt adblock hoặc tải lại trang.',
    pageTitle: 'xyanua - Cybersecurity & AI Engineer',
  },

  zh: {
    nav: {
      about: '关于',
      method: '方法',
      projects: '项目',
      research: '能力',
      lab: '实验室',
      talk: '联系',
    },
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    brandBlurb: [
      'xyanua 是我的',
      '行动代号 — 围绕',
      '拆解系统而构建',
      '"为了让它们更安全"',
    ],
    roleLine1: 'CYBER &',
    roleLine2: 'AI ENGINEER',
    whatIDo: '我做什么',
    whatIDoBody: '我为高风险数字系统设计具备对抗能力的防御与智能 Agent',
    servicesLabel: '服务',
    serviceList: [
      '威胁建模与红队',
      'AI Agent 工程',
      '安全应用开发',
      'LLM 安全 / Prompt 防护',
      '检测工程 / SIEM',
      '自动化与 SOAR',
    ],
    hero: {
      line1: '我将',
      pixel1: 'ADVERSARIAL',
      mid: '带入',
      line3: 'SECURITY & AI',
      pixel2: 'SYSTEMS',
    },
    enterBriefing: '进入简报',
    aboutCta: '关于我',
    openToWork: '可接受自由职业、合同制或全职。',
    scheduleCall: '预约通话',
    scroll: '向下滚动',
    basedIn: '所在地',
    basedInVal: '越南',
    marqueeItems: [
      'Red Teaming',
      'Threat Modeling',
      'AI Agents',
      'LLM Security',
      'Detection Engineering',
      'SIEM / SOAR',
      'Secure Apps',
      'Adversarial Thinking',
    ],
    aboutLabel: '01 — 关于',
    aboutTitle1: '行动者思维。',
    aboutTitle2: '构建者本能。',
    aboutP1:
      '我是 xyanua — 专注网络安全与 AI 的工程师，关注真实会被攻击的系统：身份、云、应用，以及围绕 LLM 与自主 Agent 的新攻击面。',
    aboutP2:
      '我的默认循环很简单：假设已被入侵，证明影响，再设计能缩短检测与响应、又不会让团队淹没在噪声中的防御与 Agent。',
    statOps: '红队行动',
    statRules: '检测规则',
    statAgents: 'AI Agents',
    methodLabel: '02 — 方法',
    methodTitle: '真实项目如何推进',
    methodSteps: [
      {
        step: '01',
        title: '侦察爆炸半径',
        text: '梳理资产、信任边界，以及一旦崩溃真正会痛的地方 — 不是通用清单。',
      },
      {
        step: '02',
        title: '有目的地打破',
        text: '对弱点做红队。滥用 AI Agent。用证据证明可利用性，而不是感觉。',
      },
      {
        step: '03',
        title: '重建防御',
        text: '交付检测、补丁与 Agent 护栏，使其能扛住下一次有创造力的攻击。',
      },
      {
        step: '04',
        title: '度量并迭代',
        text: '跟踪 MTTD/MTTR、误报与 Agent 评估分数，让安全能力持续累积。',
      },
    ],
    capsLabel: '03 — 能力',
    capsTitle: '安全深度遇上 AI 系统工程',
    services: [
      {
        title: '威胁建模与红队',
        desc: '攻击路径映射、对手模拟，以及在真实攻击者到来前完成的突破演练。',
      },
      {
        title: 'AI Agent 工程',
        desc: '带护栏、评估与生产级编排的工具型 Agent，服务安全工作流。',
      },
      {
        title: '安全应用开发',
        desc: '强化的 React/Next 栈、认证边界、密钥卫生与默认安全的 API。',
      },
      {
        title: 'LLM 安全 / Prompt 防护',
        desc: '抵御提示注入、输出过滤、越狱测试，以及面向模型的滥用场景。',
      },
      {
        title: '检测工程 / SIEM',
        desc: '高信号检测、分诊手册，以及分析师可信任的告警降噪。',
      },
      {
        title: '自动化与 SOAR',
        desc: '缩短驻留时间的响应自动化，又不会吵醒整个值班轮转。',
      },
    ],
    projectsLabel: '04 — 精选作品',
    projectsTitle: '来自实验室的信号',
    caseStudy: '案例研究 →',
    projects: [
      {
        id: 'pathfinder',
        tag: 'RED TEAM',
        title: '对抗路径发现器',
        text: '将身份与云配置错误串联成完整租户接管故事，面向金融科技栈。',
      },
      {
        id: 'soc-copilot',
        tag: 'AI AGENT',
        title: 'SOC 分诊副驾驶',
        text: '汇总告警、拉取上下文并起草遏制步骤，同时保留人工审批闸门。',
      },
      {
        id: 'prompt-armor',
        tag: 'LLM SEC',
        title: 'Prompt 护甲套件',
        text: '针对生产聊天界面的注入、数据外泄与工具滥用回归测试包。',
      },
    ],
    labLabel: '05 — 实验室',
    labTitle: '关于 Agent、检测与利用链的实验',
    labBody: '持续更新的提示防护基准、SIEM 规则包与红队笔记。更多片段即将发布。',
    labTags: ['提示注入语料', '云攻击图', 'Agent 评估框架'],
    talkLabel: '06 — 联系',
    talkTitle: '需要更锋利的安全优势 — 或一个不会在生产环境自由发挥的 AI Agent？',
    talkBody: '可接受自由职业、合同制或全职。告诉我你在防护什么，我们会快速框定对抗视角。',
    scheduleCta: '发送邮件',
    contactEmail: '邮箱',
    contactGithub: 'GitHub',
    contactCopy: '复制邮箱',
    contactCopied: '已复制',
    contactChannels: '联系渠道',
    contactOpenProfile: '打开主页 →',
    backTop: '回到顶部',
    footerStats: '3 次红队行动 • 47 条检测规则 • 12 个 AI Agent',
    audio: '音频',
    audioOn: '开',
    audioOff: '关',
    playMusic: '播放音乐',
    pauseMusic: '暂停音乐',
    nextTrack: '下一首',
    ytError: '无法播放 YouTube。请尝试关闭广告拦截或刷新页面。',
    pageTitle: 'xyanua - 网络安全与 AI 工程师',
  },
}
