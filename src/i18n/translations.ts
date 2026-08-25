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
  termTitle: string
  termLines: string[]
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
  contactChannels: string
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
    whatIDo: 'Focus',
    whatIDoBody:
      'I chain identity, cloud, and LLM-tool abuse into proofs that force concrete fixes, then wire detections so the same path lights up next time.',
    servicesLabel: 'Ops stack',
    serviceList: [
      'Identity / cloud attack paths',
      'Agent tool-abuse testing',
      'Prompt injection regression',
      'SIEM rule design (high signal)',
      'Containment playbooks',
      'Hardened React/Next surfaces',
    ],
    hero: {
      line1: 'I BREAK',
      pixel1: 'SYSTEMS',
      mid: 'BEFORE',
      line3: 'THEY BREAK',
      pixel2: 'YOU',
    },
    enterBriefing: 'READ THE OPS',
    aboutCta: 'Who I am',
    openToWork: 'Available for contract / freelance / full-time.',
    scheduleCall: 'Mail me',
    scroll: 'Scroll',
    basedIn: 'Based in',
    basedInVal: 'Vietnam',
    marqueeItems: [
      'OIDC abuse paths',
      'IAM privilege chains',
      'Prompt injection',
      'Tool-calling exfil',
      'Sigma / SIEM rules',
      'SOAR containment',
      'Agent eval gates',
      'Assume-breach drills',
    ],
    aboutLabel: '01 / About',
    aboutTitle1: 'Assume breach.',
    aboutTitle2: 'Ship the proof.',
    aboutP1:
      "I'm xyanua. I live in Vietnam. Most of my time goes into identity and cloud attack paths, and into AI agents that can be abused through their own tools.",
    aboutP2:
      'If I find a path, I write the hops so it can be reproduced. Then I help close it and add a detection for the same steps.',
    statOps: 'Red team ops',
    statRules: 'Detection rules',
    statAgents: 'AI agents',
    termTitle: 'xyanua / zsh',
    termLines: [
      '$ whoami',
      'xyanua',
      '',
      '$ cat ~/.focus',
      '▸ identity + cloud pathfinding',
      '▸ agent/tool abuse cases',
      '▸ prompt-injection regression',
      '▸ high-signal detections',
      '',
      '$ _',
    ],
    methodLabel: '02 / Method',
    methodTitle: 'How I actually work a target',
    methodSteps: [
      {
        step: '01',
        title: 'Draw the trust map',
        text: 'IdP → apps → CI → data stores. Mark what a low-priv identity can touch without asking permission.',
      },
      {
        step: '02',
        title: 'Force a real chain',
        text: 'No theoretical CVEs-only theater. I need a reproducible hop list: token, role, bucket, tool call, impact.',
      },
      {
        step: '03',
        title: 'Close the path twice',
        text: 'Patch the control that failed, then add a detection that would have fired on the same sequence.',
      },
      {
        step: '04',
        title: 'Keep score',
        text: 'MTTD/MTTR, false-positive rate, agent eval fails. If it is not measured, it will rot.',
      },
    ],
    capsLabel: '03 / Capabilities',
    capsTitle: 'Where I am useful in a real stack',
    services: [
      {
        title: 'Identity / cloud pathfinding',
        desc: 'Federation gaps, role chaining, storage policy mistakes. Mapped as attacker movement, not a compliance matrix.',
      },
      {
        title: 'AI agent abuse testing',
        desc: 'Tool permissions, retrieval poisoning, and “helpful” agents that exfiltrate through normal workflows.',
      },
      {
        title: 'Secure product surfaces',
        desc: 'Auth boundaries, secret handling, and React/Next patterns that fail closed under abuse.',
      },
      {
        title: 'Prompt-injection regression',
        desc: 'Fixture packs + CI gates so prompt/model changes cannot silently reopen known attacks.',
      },
      {
        title: 'Detection engineering',
        desc: 'Rules and triage notes tuned for signal. Fewer alerts, clearer next actions.',
      },
      {
        title: 'Containment automation',
        desc: 'SOAR steps with human gates. Shorten dwell time without letting bots nuke production alone.',
      },
    ],
    projectsLabel: '04 / Selected work',
    projectsTitle: 'Proofs that changed the backlog',
    caseStudy: 'Open proof →',
    projects: [
      {
        id: 'pathfinder',
        tag: 'RED TEAM',
        title: 'Tenant takeover chain',
        text: 'Low-priv identity → mis-scoped CI role → storage read → admin token story on a fintech stack.',
      },
      {
        id: 'soc-copilot',
        tag: 'AI AGENT',
        title: 'SOC triage agent',
        text: 'Pulls alert + asset + auth context into a draft note. No containment without human approve.',
      },
      {
        id: 'prompt-armor',
        tag: 'LLM SEC',
        title: 'Prompt regression pack',
        text: 'Injection / jailbreak / tool-abuse fixtures wired into CI for a production chat surface.',
      },
    ],
    labLabel: '05 / Lab',
    labTitle: 'Notes I keep open while I work',
    labBody:
      'Prompt fixtures, cloud attack graphs, and detection drafts. Rough on purpose. This is an operator notebook, not a brochure.',
    labTags: ['prompt fixtures', 'IAM graphs', 'sigma drafts'],
    talkLabel: '06 / Talk',
    talkTitle: 'Got a path you cannot prove, or an agent you do not fully trust?',
    talkBody:
      'Send the stack and the fear. I will tell you quickly whether it is a red-team proof, a detection problem, an agent-guardrail problem, or all three.',
    scheduleCta: 'EMAIL ME',
    contactEmail: 'Email',
    contactGithub: 'GitHub',
    contactChannels: 'Direct channels',
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
    whatIDo: 'Focus',
    whatIDoBody:
      'Tôi xâu chuỗi identity, cloud và lạm dụng tool của LLM thành bằng chứng buộc phải vá, rồi gắn detection để lần sau cùng path đó sáng lên.',
    servicesLabel: 'Ops stack',
    serviceList: [
      'Identity / cloud attack paths',
      'Agent tool-abuse testing',
      'Prompt injection regression',
      'SIEM rule (high signal)',
      'Containment playbooks',
      'Hardened React/Next',
    ],
    hero: {
      line1: 'TÔI PHÁ',
      pixel1: 'SYSTEMS',
      mid: 'TRƯỚC KHI',
      line3: 'CHÚNG PHÁ',
      pixel2: 'YOU',
    },
    enterBriefing: 'ĐỌC OPS',
    aboutCta: 'Tôi là ai',
    openToWork: 'Nhận contract / freelance / full-time.',
    scheduleCall: 'Mail tôi',
    scroll: 'Cuộn xuống',
    basedIn: 'Đặt tại',
    basedInVal: 'Việt Nam',
    marqueeItems: [
      'OIDC abuse paths',
      'IAM privilege chains',
      'Prompt injection',
      'Tool-calling exfil',
      'Sigma / SIEM rules',
      'SOAR containment',
      'Agent eval gates',
      'Assume-breach drills',
    ],
    aboutLabel: '01 / Giới thiệu',
    aboutTitle1: 'Assume breach.',
    aboutTitle2: 'Ship the proof.',
    aboutP1:
      'Tôi là xyanua, đang ở Việt Nam. Tôi hay soi identity với cloud, và test agent AI xem tool của nó có bị lạm dụng được không.',
    aboutP2:
      'Có path thì tôi ghi từng bước cho tái lập được. Xong vá, rồi gắn detection cho đúng chuỗi đó.',
    statOps: 'Chiến dịch red team',
    statRules: 'Detection rules',
    statAgents: 'AI agents',
    termTitle: 'xyanua / zsh',
    termLines: [
      '$ whoami',
      'xyanua',
      '',
      '$ cat ~/.focus',
      '▸ identity + cloud pathfinding',
      '▸ agent/tool abuse cases',
      '▸ prompt-injection regression',
      '▸ high-signal detections',
      '',
      '$ _',
    ],
    methodLabel: '02 / Phương pháp',
    methodTitle: 'Cách tôi thực sự làm một target',
    methodSteps: [
      {
        step: '01',
        title: 'Vẽ trust map',
        text: 'IdP → apps → CI → data. Đánh dấu thứ identity low-priv chạm được mà không cần xin phép.',
      },
      {
        step: '02',
        title: 'Ép ra chuỗi thật',
        text: 'Không chỉ CVE trên giấy. Cần hop list tái lập: token, role, bucket, tool call, impact.',
      },
      {
        step: '03',
        title: 'Đóng path hai lần',
        text: 'Vá control hỏng, rồi thêm detection lẽ ra đã bắt đúng chuỗi đó.',
      },
      {
        step: '04',
        title: 'Giữ điểm số',
        text: 'MTTD/MTTR, false-positive, agent eval fail. Không đo thì sẽ mục.',
      },
    ],
    capsLabel: '03 / Năng lực',
    capsTitle: 'Chỗ tôi hữu ích trong stack thật',
    services: [
      {
        title: 'Pathfinding identity / cloud',
        desc: 'Lỗ federation, role chaining, policy storage. Nhìn như attacker di chuyển, không phải ma trận compliance.',
      },
      {
        title: 'Kiểm thử lạm dụng AI agent',
        desc: 'Quyền tool, poisoning retrieval, và agent “hữu ích” tuồn dữ liệu qua workflow bình thường.',
      },
      {
        title: 'Bảo vệ bề mặt sản phẩm',
        desc: 'Biên auth, secrets, pattern React/Next fail-closed khi bị abuse.',
      },
      {
        title: 'Regression prompt-injection',
        desc: 'Fixture + cổng CI để đổi prompt/model không âm thầm mở lại attack cũ.',
      },
      {
        title: 'Kỹ thuật detection',
        desc: 'Rule và triage note thiên về tín hiệu. Ít alert hơn, hành động rõ hơn.',
      },
      {
        title: 'Tự động hóa containment',
        desc: 'Bước SOAR có cổng người. Rút dwell time mà không để bot tự đập production.',
      },
    ],
    projectsLabel: '04 / Công việc chọn lọc',
    projectsTitle: 'Bằng chứng làm đổi backlog',
    caseStudy: 'Mở proof →',
    projects: [
      {
        id: 'pathfinder',
        tag: 'RED TEAM',
        title: 'Chuỗi chiếm tenant',
        text: 'Identity low-priv → CI role lệch scope → đọc storage → admin token trên stack fintech.',
      },
      {
        id: 'soc-copilot',
        tag: 'AI AGENT',
        title: 'Agent triage SOC',
        text: 'Gộp alert + asset + auth thành bản nháp. Không containment nếu người chưa duyệt.',
      },
      {
        id: 'prompt-armor',
        tag: 'LLM SEC',
        title: 'Bộ regression prompt',
        text: 'Fixture injection / jailbreak / tool-abuse gắn CI cho chat production.',
      },
    ],
    labLabel: '05 / Lab',
    labTitle: 'Ghi chú tôi để mở khi làm việc',
    labBody:
      'Fixture prompt, đồ thị tấn công cloud, detection nháp. Cố ý thô. Đây là sổ operator, không phải brochure.',
    labTags: ['prompt fixtures', 'IAM graphs', 'sigma drafts'],
    talkLabel: '06 / Liên hệ',
    talkTitle: 'Có path chưa chứng minh được, hoặc agent anh chưa tin hết?',
    talkBody:
      'Gửi stack và nỗi sợ. Tôi nói nhanh đó là bài red-team, bài detection, bài guardrail agent, hay cả ba.',
    scheduleCta: 'GỬI EMAIL',
    contactEmail: 'Email',
    contactGithub: 'GitHub',
    contactChannels: 'Kênh liên hệ',
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
      '行动代号，围绕',
      '拆解系统而构建',
      '"为了让它们更安全"',
    ],
    roleLine1: 'CYBER &',
    roleLine2: 'AI ENGINEER',
    whatIDo: 'Focus',
    whatIDoBody:
      '我把身份、云与 LLM 工具滥用串成可复现证据，逼出具体修复，再写检测让同一条路径下次亮起来。',
    servicesLabel: 'Ops stack',
    serviceList: [
      'Identity / cloud attack paths',
      'Agent tool-abuse testing',
      'Prompt injection regression',
      'SIEM 高信号规则',
      'Containment playbooks',
      'Hardened React/Next',
    ],
    hero: {
      line1: 'I BREAK',
      pixel1: 'SYSTEMS',
      mid: 'BEFORE',
      line3: 'THEY BREAK',
      pixel2: 'YOU',
    },
    enterBriefing: '阅读 OPS',
    aboutCta: '我是谁',
    openToWork: '可接合同 / 自由职业 / 全职。',
    scheduleCall: '给我发信',
    scroll: '向下滚动',
    basedIn: '所在地',
    basedInVal: '越南',
    marqueeItems: [
      'OIDC abuse paths',
      'IAM privilege chains',
      'Prompt injection',
      'Tool-calling exfil',
      'Sigma / SIEM rules',
      'SOAR containment',
      'Agent eval gates',
      'Assume-breach drills',
    ],
    aboutLabel: '01 / 关于',
    aboutTitle1: 'Assume breach.',
    aboutTitle2: 'Ship the proof.',
    aboutP1:
      '我是 xyanua，在越南。我主要看身份和云上的路径，也测带工具的 AI Agent 会不会被顺着正常流程滥用。',
    aboutP2:
      '找到路径我就按步骤写下来，方便复现。然后修，再给同一串动作补检测。',
    statOps: '红队行动',
    statRules: '检测规则',
    statAgents: 'AI Agents',
    termTitle: 'xyanua / zsh',
    termLines: [
      '$ whoami',
      'xyanua',
      '',
      '$ cat ~/.focus',
      '▸ identity + cloud pathfinding',
      '▸ agent/tool abuse cases',
      '▸ prompt-injection regression',
      '▸ high-signal detections',
      '',
      '$ _',
    ],
    methodLabel: '02 / 方法',
    methodTitle: '我对目标的真实做法',
    methodSteps: [
      {
        step: '01',
        title: '画出信任图',
        text: 'IdP → 应用 → CI → 数据。标出低权限身份无需请示就能碰到的东西。',
      },
      {
        step: '02',
        title: '逼出真实链路',
        text: '不要只停在 CVE 清单。要可复现的 hop：token、角色、存储、工具调用、影响。',
      },
      {
        step: '03',
        title: '关闭路径两次',
        text: '修补失效控制，再加一条本应命中同一序列的检测。',
      },
      {
        step: '04',
        title: '持续记分',
        text: 'MTTD/MTTR、误报、Agent 评估失败。不度量就会腐烂。',
      },
    ],
    capsLabel: '03 / 能力',
    capsTitle: '我在真实栈里有用的位置',
    services: [
      {
        title: '身份 / 云路径推演',
        desc: '联邦缺口、角色串联、存储策略错误。按攻击者移动来画，不是合规矩阵。',
      },
      {
        title: 'AI Agent 滥用测试',
        desc: '工具权限、检索投毒，以及通过正常流程外泄的“热心” Agent。',
      },
      {
        title: '产品面安全加固',
        desc: '认证边界、密钥处理，以及在滥用下失败即关闭的 React/Next 模式。',
      },
      {
        title: '提示注入回归',
        desc: 'Fixture + CI 闸门，避免提示/模型变更悄悄重开已知攻击。',
      },
      {
        title: '检测工程',
        desc: '偏向信号的规则与分诊说明。更少告警，更清楚的下一步。',
      },
      {
        title: '遏制自动化',
        desc: '带人工闸门的 SOAR。缩短驻留时间，又不让机器人独自砸生产。',
      },
    ],
    projectsLabel: '04 / 精选作品',
    projectsTitle: '改写了 backlog 的证据',
    caseStudy: '打开证明 →',
    projects: [
      {
        id: 'pathfinder',
        tag: 'RED TEAM',
        title: '租户接管链路',
        text: '低权限身份 → 错配 CI 角色 → 读存储 → 管理令牌，金融科技栈。',
      },
      {
        id: 'soc-copilot',
        tag: 'AI AGENT',
        title: 'SOC 分诊 Agent',
        text: '汇总告警+资产+认证成草稿。无人审批不做遏制。',
      },
      {
        id: 'prompt-armor',
        tag: 'LLM SEC',
        title: '提示回归包',
        text: '注入/越狱/工具滥用 fixture 接入生产聊天的 CI。',
      },
    ],
    labLabel: '05 / 实验室',
    labTitle: '我工作时常开的笔记',
    labBody: '提示 fixture、云攻击图、检测草稿。故意粗糙。这是操作员笔记本，不是宣传册。',
    labTags: ['prompt fixtures', 'IAM graphs', 'sigma drafts'],
    talkLabel: '06 / 联系',
    talkTitle: '有条路径你证不出来，或一个你不敢全信的 Agent？',
    talkBody: '把栈和担忧发来。我会很快判断这是红队证明、检测问题、Agent 护栏，还是三者都有。',
    scheduleCta: '发送邮件',
    contactEmail: '邮箱',
    contactGithub: 'GitHub',
    contactChannels: '联系渠道',
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
