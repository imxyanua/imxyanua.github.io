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
  aboutLabel: string
  aboutCaption: string
  aboutTitle1: string
  aboutTitleEm: string
  aboutTitle2: string
  aboutP1: string
  aboutP2: string
  aboutP3: string
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
    heroLede: 'Identity, cloud, agents. Vietnam.',
    heroCtaWork: 'View the work',
    heroCtaAbout: 'About',
    scroll: 'Scroll',
    basedIn: 'Based in',
    basedInVal: 'Vietnam',
    focusK: 'Focus',
    focusV: 'Identity, cloud, agents',
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
    craftLabel: '02 / Craft',
    craftTitle: 'The work',
    craftJobTag: 'day job',
    craftJobTitle: 'Cybersecurity',
    craftJobNote:
      'AWS, OIDC, Terraform, identity graphs, Sigma. Close the control that failed, then a detection for the same hops.',
    craftAiTag: 'the other half',
    craftAiTitle: 'AI engineering',
    craftAiLines: [
      'TypeScript prompt fixtures in CI',
      'Fail-closed on known injections',
      'Canary tokens on tool calls',
      'Human approve before containment',
      'Not jailbreak theatre',
    ],
    craftAiNote:
      'Close the tool permission first. Then a regression so the same injection does not come back.',
    termTitle: 'xyanua / zsh',
    termLines: [
      '$ cat ~/.tools',
      '▸ AWS / OIDC / Terraform',
      '▸ identity graphs',
      '▸ Sigma / SIEM',
      '',
      '$ cat ~/.wont',
      '▸ generic web pentest',
      '▸ compliance slide decks',
      '',
      '$ _',
    ],
    workLabel: '03 / Work',
    workTitle: 'Selected work',
    workIntro: 'Public repo first. Client and lab notes stay here.',
    caseStudy: 'Open →',
    projects: [
      {
        id: 'evolver',
        tag: 'AI AGENT',
        title: 'Evolver at EvoMap',
        text: 'Agent self-evolution on the EvoMap network: recipes, genes, and capsules later agents can reuse.',
      },
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
    heroLede: 'Identity, cloud, agents. Việt Nam.',
    heroCtaWork: 'Xem việc đã làm',
    heroCtaAbout: 'Giới thiệu',
    scroll: 'Cuộn xuống',
    basedIn: 'Đặt tại',
    basedInVal: 'Việt Nam',
    focusK: 'Focus',
    focusV: 'Identity, cloud, agents',
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
    craftLabel: '02 / Công việc',
    craftTitle: 'Việc đang làm',
    craftJobTag: 'ngày thường',
    craftJobTitle: 'Cybersecurity',
    craftJobNote:
      'AWS, OIDC, Terraform, identity graph, Sigma. Vá control hỏng, rồi detection cho đúng hop.',
    craftAiTag: 'nửa còn lại',
    craftAiTitle: 'AI engineering',
    craftAiLines: [
      'Fixture prompt TypeScript trong CI',
      'Fail-closed với injection đã biết',
      'Canary token trên tool call',
      'Người duyệt trước containment',
      'Không làm jailbreak theatre',
    ],
    craftAiNote:
      'Đóng quyền tool trước. Rồi regression để cùng injection không quay lại.',
    termTitle: 'xyanua / zsh',
    termLines: [
      '$ cat ~/.tools',
      '▸ AWS / OIDC / Terraform',
      '▸ identity graphs',
      '▸ Sigma / SIEM',
      '',
      '$ cat ~/.wont',
      '▸ generic web pentest',
      '▸ compliance slide decks',
      '',
      '$ _',
    ],
    workLabel: '03 / Dự án',
    workTitle: 'Việc chọn lọc',
    workIntro: 'Repo public trước. Ghi chú khách và lab để ở đây.',
    caseStudy: 'Mở →',
    projects: [
      {
        id: 'evolver',
        tag: 'AI AGENT',
        title: 'Evolver tại EvoMap',
        text: 'Tự tiến hóa agent trên mạng EvoMap: recipe, gene và capsule để agent sau dùng lại.',
      },
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
    heroLede: '身份、云、Agent。越南。',
    heroCtaWork: '看作品',
    heroCtaAbout: '关于',
    scroll: '向下滚动',
    basedIn: '所在地',
    basedInVal: '越南',
    focusK: 'Focus',
    focusV: '身份、云、Agent',
    aboutLabel: '01 / 关于',
    aboutCaption: '身份、云、Agent。',
    aboutTitle1: '安全与 AI。',
    aboutTitleEm: '同一件事。',
    aboutTitle2: '找到路径，再关上它。',
    aboutP1:
      'xyanua，在越南。主业是身份与云上的路径，以及带工具的 AI Agent 会不会被顺着正常流程滥用。',
    aboutP2: '找到路径就按步骤写下来，方便复现。然后修，再给同一串动作补检测。',
    aboutP3: '重心是身份、云、Agent 工具滥用。不做泛泛的 Web 渗透，也不做合规幻灯片。',
    craftLabel: '02 / 工作',
    craftTitle: '在做的事',
    craftJobTag: '日常',
    craftJobTitle: '网络安全',
    craftJobNote: 'AWS、OIDC、Terraform、身份图、Sigma。先修失效控制，再给同一 hop 补检测。',
    craftAiTag: '另一半',
    craftAiTitle: 'AI 工程',
    craftAiLines: [
      'CI 里的 TypeScript 提示 fixture',
      '已知注入失败即关闭',
      '工具调用上的金丝雀令牌',
      '遏制前人工审批',
      '不做越狱表演',
    ],
    craftAiNote: '先关掉工具权限。再加回归，让同一注入回不来。',
    termTitle: 'xyanua / zsh',
    termLines: [
      '$ cat ~/.tools',
      '▸ AWS / OIDC / Terraform',
      '▸ identity graphs',
      '▸ Sigma / SIEM',
      '',
      '$ cat ~/.wont',
      '▸ generic web pentest',
      '▸ compliance slide decks',
      '',
      '$ _',
    ],
    workLabel: '03 / 项目',
    workTitle: '精选工作',
    workIntro: '公开仓库优先。客户与实验室笔记留在本页。',
    caseStudy: '打开 →',
    projects: [
      {
        id: 'evolver',
        tag: 'AI AGENT',
        title: 'EvoMap 上的 Evolver',
        text: 'EvoMap 网络上的 Agent 自进化：recipe、gene、capsule，供后续 Agent 复用。',
      },
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
