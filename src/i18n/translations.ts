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
  stats: { n: string; l: string }[]
  craftLabel: string
  craftTitle: string
  craftJobTag: string
  craftJobTitle: string
  craftJobNote: string
  craftAiTag: string
  craftAiTitle: string
  craftAiLines: string[]
  craftAiNote: string
  craftHowTag: string
  craftHowTitle: string
  craftHowNote: string
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
      'I look at identity, cloud, and AI agents that can be abused through their own tools.',
    heroCtaWork: 'View the work',
    heroCtaAbout: 'About me',
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
      "I'm xyanua. I live in Vietnam. Most of my time goes into identity and cloud attack paths, and into AI agents that can be abused through their own tools.",
    aboutP2:
      'If I find a path, I write the hops so it can be reproduced. Then I help close it and add a detection for the same steps.',
    aboutP3:
      'This page is a short intro: how I work, and a few pieces I can talk about.',
    stats: [
      { n: 'IdP', l: 'Identity paths' },
      { n: 'Cloud', l: 'CI and storage' },
      { n: 'Agents', l: 'Tool abuse' },
      { n: 'VN', l: 'Based in Vietnam' },
    ],
    craftLabel: '02 / Craft',
    craftTitle: 'What I actually do',
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
      'Same question as identity work: what can a normal account, or a helpful agent, be talked into?',
    craftHowTag: 'how it goes',
    craftHowTitle: 'On a target',
    craftHowNote:
      'Draw the trust map. Force a chain that reproduces. Patch the control that failed, then add a rule for that sequence.',
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
    workIntro: 'A few paths I can describe. Open one for the short version.',
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
    talkTitle: 'Got a path you cannot prove,',
    talkTitleEm: 'or an agent you do not fully trust?',
    talkBody: 'Send the stack and the worry. I will say quickly if it is a proof problem, a detection problem, an agent-guardrail problem, or all three.',
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
      'Tôi soi identity, cloud, và agent AI bị lạm dụng qua đúng tool của nó.',
    heroCtaWork: 'Xem việc đã làm',
    heroCtaAbout: 'Tôi là ai',
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
      'Tôi là xyanua, đang ở Việt Nam. Tôi hay soi identity với cloud, và test agent AI xem tool của nó có bị lạm dụng được không.',
    aboutP2:
      'Có path thì tôi ghi từng bước cho tái lập được. Xong vá, rồi gắn detection cho đúng chuỗi đó.',
    aboutP3: 'Trang này là intro ngắn: cách tôi làm, và vài việc có thể nói.',
    stats: [
      { n: 'IdP', l: 'Identity paths' },
      { n: 'Cloud', l: 'CI và storage' },
      { n: 'Agents', l: 'Lạm dụng tool' },
      { n: 'VN', l: 'Đặt tại Việt Nam' },
    ],
    craftLabel: '02 / Công việc',
    craftTitle: 'Tôi thực sự làm gì',
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
      'Cùng câu hỏi với identity: account thường, hoặc agent “hữu ích”, lạm dụng được gì?',
    craftHowTag: 'cách làm',
    craftHowTitle: 'Trên một target',
    craftHowNote:
      'Vẽ trust map. Ép ra chuỗi tái lập được. Vá control hỏng, rồi thêm rule cho đúng chuỗi đó.',
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
    workIntro: 'Vài path tôi có thể kể. Mở một cái để đọc bản ngắn.',
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
    talkTitleEm: 'hoặc agent anh chưa tin hết?',
    talkBody:
      'Gửi stack và nỗi sợ. Tôi nói nhanh đó là bài chứng minh, bài detection, bài guardrail agent, hay cả ba.',
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
    heroLede: '我看身份、云，以及会通过自身工具被滥用的 AI Agent。',
    heroCtaWork: '看作品',
    heroCtaAbout: '我是谁',
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
      '我是 xyanua，在越南。我主要看身份和云上的路径，也测带工具的 AI Agent 会不会被顺着正常流程滥用。',
    aboutP2: '找到路径我就按步骤写下来，方便复现。然后修，再给同一串动作补检测。',
    aboutP3: '这页是一段短介绍：我怎么做，以及几件可以说的事。',
    stats: [
      { n: 'IdP', l: '身份路径' },
      { n: 'Cloud', l: 'CI 与存储' },
      { n: 'Agents', l: '工具滥用' },
      { n: 'VN', l: '在越南' },
    ],
    craftLabel: '02 / 工作',
    craftTitle: '我实际在做的事',
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
    craftAiNote: '和身份工作同一句问：普通账号，或一个热心 Agent，能被哄去做什么？',
    craftHowTag: '做法',
    craftHowTitle: '面对一个目标',
    craftHowNote: '画出信任图。逼出可复现的链路。修补失效控制，再给同一序列加规则。',
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
    workIntro: '几条我能讲的路径。点开看短版。',
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
    talkTitle: '有条路径你证不出来，',
    talkTitleEm: '或一个你不敢全信的 Agent？',
    talkBody: '把栈和担忧发来。我会很快判断这是证明、检测、Agent 护栏，还是三者都有。',
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
