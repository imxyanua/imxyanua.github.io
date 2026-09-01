export type Lang = 'vi' | 'en' | 'zh'

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'vi', label: 'VI' },
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
]

export type Dictionary = {
  nav: { about: string; craft: string; work: string; talk: string }
  openMenu: string
  closeMenu: string
  heroRole1: string
  heroRole2: string
  heroLede: string
  heroCtaWork: string
  heroCtaAbout: string
  scroll: string
  basedIn: string
  basedInVal: string
  focusK: string
  focusV: string
  marqueeItems: string[]
  aboutLabel: string
  aboutCaption: string
  aboutTitle1: string
  aboutTitleEm: string
  aboutTitle2: string
  aboutP1: string
  aboutP2: string
  aboutP3: string
  tools: string[]
  craftLabel: string
  craftTitle: string
  craftJobTag: string
  craftJobTitle: string
  craftJobNote: string
  craftAiTag: string
  craftAiTitle: string
  craftAiLines: string[]
  craftAiNote: string
  termTitle: string
  termLines: string[]
  workLabel: string
  workTitle: string
  workIntro: string
  caseStudy: string
  projects: { id: string; tag: string; title: string; text: string }[]
  talkLabel: string
  talkTitle: string
  talkTitleEm: string
  talkBody: string
  contactEmail: string
  contactGithub: string
  backTop: string
  footerNote: string
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
    nav: { about: 'About', craft: 'Craft', work: 'Work', talk: 'Contact' },
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    heroRole1: 'Cybersecurity',
    heroRole2: 'AI Engineer',
    heroLede:
      'Identity, cloud, and AI agents that can be abused through their own tools.',
    heroCtaWork: 'View the work',
    heroCtaAbout: 'About',
    scroll: 'Scroll',
    basedIn: 'Based in',
    basedInVal: 'Vietnam',
    focusK: 'Focus',
    focusV: 'Identity, cloud, agents',
    marqueeItems: [
      'OIDC abuse paths',
      'IAM privilege chains',
      'Prompt injection',
      'Tool-calling exfil',
      'Sigma / SIEM rules',
      'SOAR containment',
      'Agent eval gates',
    ],
    aboutLabel: '01 / About',
    aboutCaption: 'Identity, cloud, agents.',
    aboutTitle1: 'Cyber and AI.',
    aboutTitleEm: 'same job.',
    aboutTitle2: 'Find the path, then close it.',
    aboutP1:
      'xyanua, based in Vietnam. The work is identity and cloud attack paths, plus AI agents that can be abused through their own tools.',
    aboutP2:
      'A path gets written as hops so it can be reproduced. Then the hole is closed, and a detection is added for the same steps.',
    aboutP3:
      'Focus is identity, cloud, and agent tool-abuse. Not generic web pentest, not compliance slide decks.',
    tools: ['AWS', 'OIDC', 'Terraform', 'Python', 'SIEM', 'TypeScript', 'Sigma', 'CI gates'],
    craftLabel: '02 / Craft',
    craftTitle: 'The work',
    craftJobTag: 'day job',
    craftJobTitle: 'Cybersecurity',
    craftJobNote:
      'Federation gaps, role chaining, storage policy mistakes. Mapped as movement, then closed with a detection.',
    craftAiTag: 'the other half',
    craftAiTitle: 'AI engineering',
    craftAiLines: [
      'Agent tool permissions',
      'Prompt injection regression',
      'Human gates before containment',
      'Evals on known attacks',
      'Chat surfaces that fail closed',
    ],
    craftAiNote:
      'Same question as identity work: what a normal account, or a helpful agent, can be talked into.',
    termTitle: 'xyanua / zsh',
    termLines: [
      '$ whoami',
      'xyanua',
      '',
      '$ cat ~/.focus',
      '▸ identity + cloud paths',
      '▸ agent tool abuse',
      '▸ prompt-injection checks',
      '▸ detections that fire',
      '',
      '$ _',
    ],
    workLabel: '03 / Work',
    workTitle: 'Selected work',
    workIntro: 'A few paths that can be described. Open one for the short version.',
    caseStudy: 'Open →',
    projects: [
      {
        id: 'pathfinder',
        tag: 'IDENTITY',
        title: 'Tenant takeover chain',
        text: 'Low-priv identity to a mis-scoped CI role to storage read to an admin token, on a fintech stack.',
      },
      {
        id: 'soc-copilot',
        tag: 'AI AGENT',
        title: 'SOC triage agent',
        text: 'Pulls alert, asset, and auth context into a draft note. No containment without a person approving.',
      },
      {
        id: 'prompt-armor',
        tag: 'LLM SEC',
        title: 'Prompt regression pack',
        text: 'Injection, jailbreak, and tool-abuse fixtures wired into CI for a production chat surface.',
      },
    ],
    talkLabel: '04 / Contact',
    talkTitle: 'A path that will not reproduce,',
    talkTitleEm: 'or an agent that is not fully trusted?',
    talkBody:
      'Send the stack and the worry. The reply will say if it is a proof problem, a detection problem, an agent-guardrail problem, or all three.',
    contactEmail: 'Email',
    contactGithub: 'GitHub',
    backTop: 'Back to top',
    footerNote: 'Cybersecurity and AI, from Vietnam.',
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
    nav: { about: 'Giới thiệu', craft: 'Công việc', work: 'Dự án', talk: 'Liên hệ' },
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    heroRole1: 'Cybersecurity',
    heroRole2: 'AI Engineer',
    heroLede:
      'Identity, cloud, và agent AI bị lạm dụng qua đúng tool của nó.',
    heroCtaWork: 'Xem việc đã làm',
    heroCtaAbout: 'Giới thiệu',
    scroll: 'Cuộn xuống',
    basedIn: 'Đặt tại',
    basedInVal: 'Việt Nam',
    focusK: 'Focus',
    focusV: 'Identity, cloud, agents',
    marqueeItems: [
      'OIDC abuse paths',
      'IAM privilege chains',
      'Prompt injection',
      'Tool-calling exfil',
      'Sigma / SIEM rules',
      'SOAR containment',
      'Agent eval gates',
    ],
    aboutLabel: '01 / Giới thiệu',
    aboutCaption: 'Identity, cloud, agents.',
    aboutTitle1: 'Cyber và AI.',
    aboutTitleEm: 'cùng một việc.',
    aboutTitle2: 'Tìm path, rồi đóng lại.',
    aboutP1:
      'xyanua, đang ở Việt Nam. Việc chính: identity, cloud, và agent AI khi tool bị lạm dụng.',
    aboutP2:
      'Có path thì ghi từng bước cho tái lập được. Xong vá, rồi gắn detection cho đúng chuỗi đó.',
    aboutP3:
      'Trọng tâm là identity, cloud, và lạm dụng tool của agent. Không pentest web generic, không slide compliance.',
    tools: ['AWS', 'OIDC', 'Terraform', 'Python', 'SIEM', 'TypeScript', 'Sigma', 'CI gates'],
    craftLabel: '02 / Công việc',
    craftTitle: 'Việc đang làm',
    craftJobTag: 'ngày thường',
    craftJobTitle: 'Cybersecurity',
    craftJobNote:
      'Lỗ federation, role chaining, policy storage. Nhìn như attacker đi, rồi đóng và gắn detection.',
    craftAiTag: 'nửa còn lại',
    craftAiTitle: 'AI engineering',
    craftAiLines: [
      'Quyền tool của agent',
      'Regression prompt injection',
      'Cổng người trước containment',
      'Eval trên attack đã biết',
      'Chat surface fail-closed',
    ],
    craftAiNote:
      'Cùng câu hỏi với identity: account thường, hoặc agent “hữu ích”, lạm dụng được gì.',
    termTitle: 'xyanua / zsh',
    termLines: [
      '$ whoami',
      'xyanua',
      '',
      '$ cat ~/.focus',
      '▸ identity + cloud paths',
      '▸ agent tool abuse',
      '▸ prompt-injection checks',
      '▸ detections that fire',
      '',
      '$ _',
    ],
    workLabel: '03 / Dự án',
    workTitle: 'Việc chọn lọc',
    workIntro: 'Vài path có thể kể. Mở một cái để đọc bản ngắn.',
    caseStudy: 'Mở →',
    projects: [
      {
        id: 'pathfinder',
        tag: 'IDENTITY',
        title: 'Chuỗi chiếm tenant',
        text: 'Identity low-priv tới CI role lệch scope tới đọc storage tới admin token, trên stack fintech.',
      },
      {
        id: 'soc-copilot',
        tag: 'AI AGENT',
        title: 'Agent triage SOC',
        text: 'Gộp alert, asset và auth thành bản nháp. Không containment nếu người chưa duyệt.',
      },
      {
        id: 'prompt-armor',
        tag: 'LLM SEC',
        title: 'Bộ regression prompt',
        text: 'Fixture injection, jailbreak và tool-abuse gắn CI cho chat production.',
      },
    ],
    talkLabel: '04 / Liên hệ',
    talkTitle: 'Có path chưa chứng minh được,',
    talkTitleEm: 'hoặc agent chưa tin hết?',
    talkBody:
      'Gửi stack và nỗi sợ. Sẽ nói nhanh đó là bài chứng minh, bài detection, bài guardrail agent, hay cả ba.',
    contactEmail: 'Email',
    contactGithub: 'GitHub',
    backTop: 'Về đầu trang',
    footerNote: 'Cybersecurity và AI, từ Việt Nam.',
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
    nav: { about: '关于', craft: '工作', work: '项目', talk: '联系' },
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    heroRole1: '网络安全',
    heroRole2: 'AI 工程师',
    heroLede: '身份、云，以及会通过自身工具被滥用的 AI Agent。',
    heroCtaWork: '看作品',
    heroCtaAbout: '关于',
    scroll: '向下滚动',
    basedIn: '所在地',
    basedInVal: '越南',
    focusK: 'Focus',
    focusV: '身份、云、Agent',
    marqueeItems: [
      'OIDC abuse paths',
      'IAM privilege chains',
      'Prompt injection',
      'Tool-calling exfil',
      'Sigma / SIEM rules',
      'SOAR containment',
      'Agent eval gates',
    ],
    aboutLabel: '01 / 关于',
    aboutCaption: '身份、云、Agent。',
    aboutTitle1: '安全与 AI。',
    aboutTitleEm: '同一件事。',
    aboutTitle2: '找到路径，再关上它。',
    aboutP1:
      'xyanua，在越南。主业是身份与云上的路径，以及带工具的 AI Agent 会不会被顺着正常流程滥用。',
    aboutP2: '找到路径就按步骤写下来，方便复现。然后修，再给同一串动作补检测。',
    aboutP3: '重心是身份、云、Agent 工具滥用。不做泛泛的 Web 渗透，也不做合规幻灯片。',
    tools: ['AWS', 'OIDC', 'Terraform', 'Python', 'SIEM', 'TypeScript', 'Sigma', 'CI gates'],
    craftLabel: '02 / 工作',
    craftTitle: '在做的事',
    craftJobTag: '日常',
    craftJobTitle: '网络安全',
    craftJobNote: '联邦缺口、角色串联、存储策略错误。按移动来画，再补检测关上。',
    craftAiTag: '另一半',
    craftAiTitle: 'AI 工程',
    craftAiLines: [
      'Agent 工具权限',
      '提示注入回归',
      '遏制前的人工闸门',
      '对已知攻击做评估',
      '失败即关闭的聊天面',
    ],
    craftAiNote: '和身份工作同一句问：普通账号，或一个热心 Agent，能被哄去做什么。',
    termTitle: 'xyanua / zsh',
    termLines: [
      '$ whoami',
      'xyanua',
      '',
      '$ cat ~/.focus',
      '▸ identity + cloud paths',
      '▸ agent tool abuse',
      '▸ prompt-injection checks',
      '▸ detections that fire',
      '',
      '$ _',
    ],
    workLabel: '03 / 项目',
    workTitle: '精选工作',
    workIntro: '几条可以讲的路径。点开看短版。',
    caseStudy: '打开 →',
    projects: [
      {
        id: 'pathfinder',
        tag: 'IDENTITY',
        title: '租户接管链路',
        text: '低权限身份到错配 CI 角色到读存储到管理令牌，金融科技栈。',
      },
      {
        id: 'soc-copilot',
        tag: 'AI AGENT',
        title: 'SOC 分诊 Agent',
        text: '汇总告警、资产与认证成草稿。无人审批不做遏制。',
      },
      {
        id: 'prompt-armor',
        tag: 'LLM SEC',
        title: '提示回归包',
        text: '注入、越狱、工具滥用 fixture 接入生产聊天的 CI。',
      },
    ],
    talkLabel: '04 / 联系',
    talkTitle: '有条路径证不出来，',
    talkTitleEm: '或一个不敢全信的 Agent？',
    talkBody: '把栈和担忧发来。很快能判断这是证明、检测、Agent 护栏，还是三者都有。',
    contactEmail: '邮箱',
    contactGithub: 'GitHub',
    backTop: '回到顶部',
    footerNote: '网络安全与 AI，来自越南。',
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
