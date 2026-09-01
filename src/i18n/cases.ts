import type { Lang } from './translations'

export type CaseVenue = 'live' | 'client' | 'lab'

export type CaseLink = {
  href: string
  kind: 'repo' | 'site'
}

export type CaseDetail = {
  id: string
  venue: CaseVenue
  problem: string
  approach: string[]
  outcome: string
  stack: string[]
  links?: CaseLink[]
}

export type CaseUi = {
  close: string
  problem: string
  approach: string
  outcome: string
  stack: string
  links: string
  open: string
  note: string
  live: string
  client: string
  lab: string
  repo: string
  site: string
}

export const caseUi: Record<Lang, CaseUi> = {
  en: {
    close: 'Close',
    problem: 'Problem',
    approach: 'Approach',
    outcome: 'Outcome',
    stack: 'Stack',
    links: 'Links',
    open: 'Open note',
    note: 'Note',
    live: 'Public',
    client: 'Client',
    lab: 'Lab',
    repo: 'GitHub',
    site: 'EvoMap',
  },
  vi: {
    close: 'Đóng',
    problem: 'Vấn đề',
    approach: 'Cách làm',
    outcome: 'Kết quả',
    stack: 'Công nghệ',
    links: 'Liên kết',
    open: 'Mở ghi chú',
    note: 'Ghi chú',
    live: 'Public',
    client: 'Khách',
    lab: 'Lab',
    repo: 'GitHub',
    site: 'EvoMap',
  },
  zh: {
    close: '关闭',
    problem: '问题',
    approach: '方法',
    outcome: '结果',
    stack: '技术栈',
    links: '链接',
    open: '打开笔记',
    note: '笔记',
    live: '公开',
    client: '客户',
    lab: '实验室',
    repo: 'GitHub',
    site: 'EvoMap',
  },
}

export const cases: Record<Lang, CaseDetail[]> = {
  en: [
    {
      id: 'evolver',
      venue: 'live',
      links: [
        { kind: 'repo', href: 'https://github.com/EvoMap/evolver' },
        { kind: 'site', href: 'https://evomap.ai' },
      ],
      problem:
        'Agent sessions start from zero. Useful traces die in one chat and never become a reusable step.',
      approach: [
        'Distill verified work into genes and capsules on the EvoMap network.',
        'Express recipes so a later agent can replay the same path.',
        'Keep the loop in Evolver rather than a private notebook.',
      ],
      outcome:
        'A self-evolution layer for agents, shipped as Evolver inside EvoMap.',
      stack: ['TypeScript', 'GEP', 'Recipes', 'Genes', 'Capsules'],
    },
    {
      id: 'pathfinder',
      venue: 'client',
      problem:
        'A fintech platform needed proof that identity and cloud gaps could chain into tenant takeover, before a real attacker did it.',
      approach: [
        'Mapped trust boundaries across IdP, CI roles, and object storage.',
        'Emulated a low-privilege identity and chained misconfigs into privilege escalation.',
        'Documented each hop with reproducible evidence and blast-radius notes for leadership.',
      ],
      outcome:
        'Delivered a full takeover narrative with prioritized fixes. Critical paths were closed within one sprint; detection coverage was added for the same chain.',
      stack: ['AWS', 'OIDC', 'Terraform', 'Identity graphing', 'Repro notes'],
    },
    {
      id: 'soc-copilot',
      venue: 'client',
      problem:
        'SOC analysts drowned in medium-fidelity alerts. Triage time was high and context switching killed focus.',
      approach: [
        'Built an agent that pulls alert + asset + recent auth context into one brief.',
        'Added human approval gates before any containment suggestion is actionable.',
        'Measured draft quality with an eval set of historical incidents.',
      ],
      outcome:
        'Median first-pass triage notes dropped from ~12 minutes to under 3 for covered alert types, with analysts keeping final authority.',
      stack: ['Python', 'LLM tools', 'SIEM API', 'Eval harness', 'RBAC approvals'],
    },
    {
      id: 'prompt-armor',
      venue: 'lab',
      problem:
        'A production chat surface exposed tools and retrieval. Prompt injection and data-exfil paths were untested.',
      approach: [
        'Built a regression corpus for injection, jailbreak, and tool-abuse cases.',
        'Wired checks into CI so model/prompt changes fail closed on known attacks.',
        'Paired filters with canary secrets to detect silent exfiltration.',
      ],
      outcome:
        'Caught multiple high-severity prompt paths pre-release. The suite now runs on every prompt/config change.',
      stack: ['TypeScript', 'Playwright evals', 'Prompt fixtures', 'CI gates', 'Canary tokens'],
    },
  ],
  vi: [
    {
      id: 'evolver',
      venue: 'live',
      links: [
        { kind: 'repo', href: 'https://github.com/EvoMap/evolver' },
        { kind: 'site', href: 'https://evomap.ai' },
      ],
      problem:
        'Session agent bắt đầu từ zero. Trace hữu ích chết trong một chat, không thành bước tái sử dụng.',
      approach: [
        'Chưng công việc đã kiểm thành gene và capsule trên mạng EvoMap.',
        'Express recipe để agent sau replay cùng path.',
        'Giữ vòng lặp trong Evolver, không để trong sổ riêng.',
      ],
      outcome: 'Lớp tự tiến hóa cho agent, ship như Evolver trong EvoMap.',
      stack: ['TypeScript', 'GEP', 'Recipes', 'Genes', 'Capsules'],
    },
    {
      id: 'pathfinder',
      venue: 'client',
      problem:
        'Một nền tảng fintech cần bằng chứng rằng lỗ hổng identity + cloud có thể bị xâu chuỗi thành chiếm tenant, trước khi kẻ tấn công thật làm điều đó.',
      approach: [
        'Lập bản đồ biên tin cậy qua IdP, CI roles và object storage.',
        'Mô phỏng identity đặc quyền thấp rồi xâu misconfig thành leo thang đặc quyền.',
        'Ghi từng bước bằng bằng chứng tái lập được và ghi chú bán kính ảnh hưởng cho leadership.',
      ],
      outcome:
        'Giao được câu chuyện takeover đầy đủ kèm fix ưu tiên. Các path critical được đóng trong một sprint; detection cho cùng chuỗi được bổ sung.',
      stack: ['AWS', 'OIDC', 'Terraform', 'Identity graphing', 'Repro notes'],
    },
    {
      id: 'soc-copilot',
      venue: 'client',
      problem:
        'Analyst SOC ngập trong alert độ tin cậy trung bình. Thời gian triage cao và chuyển ngữ cảnh liên tục làm mất tập trung.',
      approach: [
        'Xây agent gom alert + asset + auth gần đây thành một brief.',
        'Thêm cổng duyệt người trước khi gợi ý containment trở thành hành động.',
        'Đo chất lượng bản nháp bằng eval set từ incident lịch sử.',
      ],
      outcome:
        'Thời gian ghi chú triage vòng đầu giảm từ ~12 phút xuống dưới 3 phút với các loại alert được cover; analyst vẫn giữ quyền quyết định cuối.',
      stack: ['Python', 'LLM tools', 'SIEM API', 'Eval harness', 'RBAC approvals'],
    },
    {
      id: 'prompt-armor',
      venue: 'lab',
      problem:
        'Bề mặt chat production mở tool và retrieval. Prompt injection cùng đường data-exfil chưa được kiểm thử.',
      approach: [
        'Tạo corpus regression cho injection, jailbreak và tool-abuse.',
        'Gắn check vào CI để đổi model/prompt fail-closed với attack đã biết.',
        'Kết hợp filter với canary secret để phát hiện exfil thầm.',
      ],
      outcome:
        'Bắt được nhiều path prompt nghiêm trọng trước release. Suite chạy trên mọi thay đổi prompt/config.',
      stack: ['TypeScript', 'Playwright evals', 'Prompt fixtures', 'CI gates', 'Canary tokens'],
    },
  ],
  zh: [
    {
      id: 'evolver',
      venue: 'live',
      links: [
        { kind: 'repo', href: 'https://github.com/EvoMap/evolver' },
        { kind: 'site', href: 'https://evomap.ai' },
      ],
      problem: 'Agent 会话从零开始。有用的痕迹停在一次对话里，无法变成可复用步骤。',
      approach: [
        '把已验证的工作蒸馏为 EvoMap 网络上的 gene 与 capsule。',
        '表达 recipe，让后续 Agent 能重放同一条路径。',
        '把循环留在 Evolver，而不是私人笔记。',
      ],
      outcome: '一层 Agent 自进化，作为 Evolver 交付在 EvoMap 内。',
      stack: ['TypeScript', 'GEP', 'Recipes', 'Genes', 'Capsules'],
    },
    {
      id: 'pathfinder',
      venue: 'client',
      problem:
        '某金融科技平台需要证明身份与云配置缺口可被串联成租户接管，在真实攻击者之前完成。',
      approach: [
        '梳理 IdP、CI 角色与对象存储之间的信任边界。',
        '模拟低权限身份，并将错误配置串联为提权路径。',
        '为每一步提供可复现证据与影响半径说明，供管理层决策。',
      ],
      outcome:
        '交付完整接管叙事与优先级修复。关键路径在一个 sprint 内关闭，并为同一链路补充检测。',
      stack: ['AWS', 'OIDC', 'Terraform', 'Identity graphing', 'Repro notes'],
    },
    {
      id: 'soc-copilot',
      venue: 'client',
      problem: 'SOC 分析师被中等置信告警淹没，分诊耗时长，频繁切换上下文损害专注。',
      approach: [
        '构建 Agent，将告警、资产与近期认证上下文汇总为一份简报。',
        '在任何遏制建议可执行前加入人工审批闸门。',
        '用历史事件评估集衡量草稿质量。',
      ],
      outcome:
        '覆盖告警类型的首轮分诊笔记中位时间从约 12 分钟降至 3 分钟以内，最终决定权仍在分析师。',
      stack: ['Python', 'LLM tools', 'SIEM API', 'Eval harness', 'RBAC approvals'],
    },
    {
      id: 'prompt-armor',
      venue: 'lab',
      problem: '生产聊天界面暴露工具与检索能力，提示注入与数据外泄路径未经测试。',
      approach: [
        '建立注入、越狱与工具滥用的回归语料。',
        '接入 CI，使模型/提示变更在已知攻击上失败即阻断。',
        '结合过滤器与金丝雀密钥以发现静默外泄。',
      ],
      outcome: '发布前捕获多条高危提示路径。该套件现已在每次提示/配置变更时运行。',
      stack: ['TypeScript', 'Playwright evals', 'Prompt fixtures', 'CI gates', 'Canary tokens'],
    },
  ],
}
