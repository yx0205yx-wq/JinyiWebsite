const LANG_KEY = "jinyi-site-language";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdqkjbl";

const contact = {
  email: "yx0205yx@gmail.com",
  whatsapp: "+86 13515525036",
  whatsappUrl: "https://wa.me/8613515525036",
  address:
    "Room 101, No. 11, Xinwei East Seventh Lane, Shixia Village, Dalang Town, Dongguan City, Guangdong Province, China",
  addressZh: "广东省东莞市大朗镇石厦新围东七巷11号101室",
};

// 【优化说明】页面展示优先使用 WebP，降低图片传输体积；原始 JPG/PNG 保留给社交分享和归档。
const sharedImages = {
  profileParts: "assets/company/profile-ground-inserts.webp",
  moldSet: "assets/company/mold-components-set.webp",
  roundPins: "assets/company/round-pin-components.webp",
  ceramic: "assets/company/ceramic-component.webp",
  plates: "assets/company/precision-plate-components.webp",
  smallWire: "assets/real-photos/small-wire-cut-parts.webp",
  tungsten: "assets/real-photos/tungsten-forming-parts.webp",
};

const equipmentImages = {
  pgWorkshop: "assets/equipment/pg-profile-grinding-workshop.webp",
  pgMachine: "assets/equipment/pg-profile-grinding-machine.webp",
  wireLine: "assets/equipment/wire-edm-line.webp",
  wireMachine: "assets/equipment/wire-edm-machine.webp",
  sodickEdm: "assets/equipment/sodick-mirror-edm.webp",
  mitsuiGrinding: "assets/equipment/mitsui-grinding-machine.webp",
  cncGrinding: "assets/equipment/cnc-form-grinding-area.webp",
  opticalGrinding: "assets/equipment/optical-projection-grinding.webp",
  partnerEquipment: "assets/equipment/partner-equipment-overview.webp",
  workshop01: "assets/equipment/temperature-controlled-workshop-01.webp",
  workshop02: "assets/equipment/temperature-controlled-workshop-02.webp",
  workshop03: "assets/equipment/temperature-controlled-workshop-03.webp",
  workshop04: "assets/equipment/temperature-controlled-workshop-04.webp",
  workshop05: "assets/equipment/temperature-controlled-workshop-05.webp",
  workshop06: "assets/equipment/temperature-controlled-workshop-06.webp",
  inspectionRoom: "assets/equipment/inspection-room-overview.webp",
  heightGauge: "assets/equipment/height-gauge.webp",
  projector: "assets/equipment/projector-equipment.webp",
  microscope: "assets/equipment/tool-microscope.webp",
  roughnessTester: "assets/equipment/surface-roughness-tester.webp",
  cmm: "assets/equipment/cmm-equipment.webp",
};

const imageMeta = {
  "assets/real-photos/pg-profile-ground-components.webp": [631, 425],
  "assets/real-photos/finished-mold-plates.webp": [1279, 1706],
  "assets/real-photos/edm-workshop-line.webp": [1440, 810],
  "assets/company/profile-ground-inserts.webp": [904, 603],
  "assets/company/mold-components-set.webp": [971, 649],
  "assets/company/round-pin-components.webp": [575, 392],
  "assets/company/ceramic-component.webp": [1144, 645],
  "assets/company/precision-plate-components.webp": [1717, 1147],
  "assets/real-photos/small-wire-cut-parts.webp": [600, 444],
  "assets/real-photos/tungsten-forming-parts.webp": [600, 444],
  "assets/equipment/pg-profile-grinding-workshop.webp": [689, 339],
  "assets/equipment/pg-profile-grinding-machine.webp": [499, 667],
  "assets/equipment/wire-edm-line.webp": [745, 655],
  "assets/equipment/wire-edm-machine.webp": [460, 497],
  "assets/equipment/sodick-mirror-edm.webp": [1069, 626],
  "assets/equipment/mitsui-grinding-machine.webp": [575, 754],
  "assets/equipment/cnc-form-grinding-area.webp": [601, 367],
  "assets/equipment/optical-projection-grinding.webp": [369, 435],
  "assets/equipment/partner-equipment-overview.webp": [1090, 509],
  "assets/equipment/temperature-controlled-workshop-01.webp": [1200, 900],
  "assets/equipment/temperature-controlled-workshop-02.webp": [1200, 900],
  "assets/equipment/temperature-controlled-workshop-03.webp": [1200, 900],
  "assets/equipment/temperature-controlled-workshop-04.webp": [1447, 814],
  "assets/equipment/temperature-controlled-workshop-05.webp": [800, 592],
  "assets/equipment/temperature-controlled-workshop-06.webp": [1447, 814],
  "assets/equipment/inspection-room-overview.webp": [1800, 1013],
  "assets/equipment/height-gauge.webp": [370, 800],
  "assets/equipment/projector-equipment.webp": [1080, 1440],
  "assets/equipment/tool-microscope.webp": [1080, 1440],
  "assets/equipment/surface-roughness-tester.webp": [670, 709],
  "assets/equipment/cmm-equipment.webp": [514, 686],
};

const content = {
  zh: {
    metaTitle: "精密零部件定制加工 | 线切割与 PG 研磨 | Jinyi Precision",
    metaDescription: "为模具、连接器和自动化制造商提供定制精密零部件、线切割、PG研磨、硬质合金和陶瓷零件。24小时询价响应。",
    company: {
      shortName: "Jinyi Precision",
      fullName: "东莞市金一精密科技有限公司",
    },
    nav: {
      about: "公司概况",
      services: "服务项目",
      capabilities: "加工能力",
      quality: "品质保证",
      products: "产品案例",
      blog: "技术文章",
      contact: "联系我们",
      quote: "发送询价",
    },
    hero: {
      eyebrow: "精密零部件加工制造商",
      title: "精密零部件定制加工",
      lead:
        "聚焦高精度研磨、细线切割与镜面放电加工，服务电子连接器、精密组件及自动化零件客户。",
      primaryCta: "邮件发送图纸",
      secondaryCta: "查看加工能力",
      photoMain: "PG 成型研磨异形精密零部件",
      photoSide: "恒温 EDM 加工现场",
    },
    metrics: [
      ["20+ Years", "精密加工经验"],
      ["ISO9001", "质量体系认证"],
      ["24 Hours", "RFQ 快速响应"],
      ["±0.001 mm", "油线切割参考公差"],
    ],
    trust: [
      ["按图评审", "PG最小圆角"],
      ["φ0.05-φ0.20 mm", "油/水线切割线径范围"],
      ["按图评审", "PG研磨表面粗糙度"],
      ["AD30LS", "Sodick 镜面放电加工设备"],
    ],
    about: {
      eyebrow: "Company Profile",
      title: "围绕高精度、短交期与稳定品质建立的加工体系",
      body:
        "金一精密专注于精密零部件定制加工，尤其擅长超硬材料、电子零件用精密金属零部件、PG 成型研磨和细线切割。公司重视国内外客户沟通，并以品质第一、短交期响应客户需求。",
    },
    strengths: [
      ["超硬与电子部品经验", "擅长电子部品用精密金属零部件加工，保有多种超硬、钢材与陶瓷材料，适合连接器、精密冲压与自动化零件。"],
      ["重视精度与面粗度", "从加工环境、设备选择到检测方法，都围绕尺寸稳定性、表面粗糙度和可复验数据建立。"],
      ["具备 PG 工艺判断能力", "依托 profile grinding 工艺经验，可为复杂异形件、微细刃口和超硬部品提供更可靠的加工方案判断。"],
      ["可对应多种涂层", "支持 PVD、TiAlN、DLC、HA、UPC 等涂层方案，可根据寿命、摩擦和膜厚要求选择。"],
      ["日本材与替代材兼顾", "除日本材外，也可根据质量与成本目标选择台湾材、中国材，质量由金一负责对应。"],
      ["内外协作加工体系", "除超硬件外，也可通过协力工厂对应树脂成形相关零件、模架、板件与圆形零件。"],
    ],
    capabilities: {
      eyebrow: "Manufacturing Capability",
      title: "从 PG 研磨到油线切割，覆盖精密零部件核心工序",
      body:
        "清晰呈现客户在询盘与工程评估时最关注的设备配置、加工精度、表面粗糙度与可对应尺寸。",
    },
    capabilityCards: [
      {
        title: "PG 成型研磨",
        desc: "日本 WAIDA CNC 轮廓研磨设备，用于高精度异形刃口、冲头、镶件和超硬精密零部件。 实际可达到的结果取决于零件形状、材料和加工条件。",
        meta: ["WAIDA PGX-2500SP x6", "参考公差 ±0.002 mm", "PG表面粗糙度按图评审"],
      },
      {
        title: "油/水线切割",
        desc: "西部电机水介质和油介质线切割设备，支持细线、微小 R 角和高精度轮廓加工。",
        meta: ["线径 φ0.05-φ0.20 mm", "水切 ±0.002 mm", "油切 ±0.001 mm"],
      },
      {
        title: "Sodick 镜面 EDM",
        desc: "Sodick AD30LS 用于微细放电、镜面放电及复杂微细部位加工。",
        meta: ["AD30LS", "钢材 Ra0.4 µm / 超硬 Ra0.13 µm", "公差 ±0.005 mm"],
      },
      {
        title: "研磨 / CNC / 板件",
        desc: "精密研磨工艺，配合机加工和协力资源对应板件与治具类零件。",
        meta: ["精密研削", "CNC 成形研磨"],
      },
    ],
    services: {
      eyebrow: "Core Services",
      title: "面向国际采购的精密零部件加工页面",
      body: "按主要工艺与零件类型整理服务页面，便于采购、工程与质量团队快速确认加工范围、材料和询价信息。",
    },
    serviceLinks: [
      ["线切割精密零部件", "细线、水线和油线切割，适用于微小 R 角、复杂轮廓和高精度板件。", "wire-edm-parts/"],
      ["PG 成型研磨", "WAIDA PG profile grinding，用于异形刃口、冲头、镶件和超硬材料。", "pg-grinding/"],
      ["超硬零部件", "KD / EF / FD / RD 等超硬材料，适合耐磨冲头、刀口和精密镶件。", "tungsten-carbide-parts/"],
      ["陶瓷零部件", "ZKA-901、NPZ 系列陶瓷材料加工，适合绝缘、耐磨和精密定位应用。", "ceramic-parts/"],
      ["精密模具组件", "精密板件、型芯、镶件和小型模具零件加工支持。", "precision-mold-components/"],
    ],
    equipment: {
      eyebrow: "Equipment",
      title: "已确认设备与资料所列规格",
      body:
        "仅列示现行已确认的设备资料。尺寸采用公司介绍第9页原文，不代表保证的最大成品尺寸或有效加工行程。西部电机水介质线切割设备合计8台，油介质线切割另列。",
      imageOne: "Company presentation: EDM workshop photograph",
      imageTwo: "Company presentation: precision grinding photograph",
      galleryEyebrow: "Equipment Gallery",
      galleryTitle: "设备图片展示",
      galleryBody: "公司介绍资料照片按工艺、现场与检测场景整理，不作为现行设备清单；已确认设备见上表。",
    },
    equipmentColumns: ["NO", "机械设备", "数量", "资料所列设备规格", "备注"],
    equipmentRows: [
      ["1", "WAIDA 轮廓研磨机 PGX-2500SP", "6 台", "100 mm × 100 mm × 150 mm", "参考公差 ±0.002 mm"],
      ["2", "西部电机水介质线切割加工机 MP250S", "1 台", "250 mm x 180 mm x 80 mm", "线径 φ0.2 mm，最小 R0.12 mm，公差 ±0.002 mm"],
      ["3", "西部电机水介质线切割加工机 M50A", "5 台", "500 mm x 300 mm x 80 mm", "线径 φ0.1-φ0.2 mm，最小 R0.065 mm，公差 ±0.002 mm"],
      ["4", "西部电机水介质线切割加工机 MM50A", "1 台", "500 mm x 300 mm x 80 mm", "线径 φ0.07-φ0.2 mm，最小 R0.05 mm，公差 ±0.002 mm"],
      ["5", "西部电机水介质线切割机 M50B", "1 台", "500 mm x 350 mm x 80 mm", "线径 φ0.1-φ0.2 mm，最小 R0.065 mm，公差 ±0.002 mm"],
      ["6", "西部电机油线切割加工机 M25LP", "—", "250 mm x 250 mm x 80 mm", "线径 φ0.05-φ0.2 mm，最小 R0.035 mm，公差 ±0.001 mm"],
      ["9", "Sodick 镜面放电加工机 AD30LS", "—", "320 mm x 200 mm x 230 mm", "钢材 Ra0.4 µm，超硬 Ra0.13 µm，公差 ±0.005 mm"],
      ["CMM", "Hexagon 686 三坐标测量机", "—", "—", "公司自有，厂内使用"],
    ],
    equipmentGallery: [
      ["PG 成型研磨", "WAIDA PG 加工现场", "CNC profile grinding 设备用于高精度异形刃口、冲头与超硬零件。", equipmentImages.pgWorkshop],
      ["PG 成型研磨", "PGX-2500SP 设备细节", "用于 profile 轮廓研磨与微小形状加工。", equipmentImages.pgMachine],
      ["线切割 EDM", "西部电机线切割设备组", "支持细线、微小 R 角和高精度轮廓切割。", equipmentImages.wireLine],
      ["线切割 EDM", "油/水线切割单机", "用于精密轮廓、窄槽与微细孔位相关加工。", equipmentImages.wireMachine],
      ["镜面 EDM", "Sodick 镜面放电加工机", "对应微细放电、镜面放电与复杂型腔加工。", equipmentImages.sodickEdm],
      ["精密研削", "资料照片：精密研磨设备", "用于平面、成形与高稳定性精密研削。", equipmentImages.mitsuiGrinding],
      ["CNC 成形研削", "CNC 成形研削加工区", "用于复杂形状、台阶与轮廓面的稳定加工。", equipmentImages.cncGrinding],
      ["投影研磨", "光学投影研磨设备", "用于小型精密零件的轮廓确认与精密成形加工。", equipmentImages.opticalGrinding],
      ["协力设备", "协力会社设备概览", "补充板件、治具和部分机加工需求的协作产能。", equipmentImages.partnerEquipment],
      ["恒温环境", "恒温加工现场 01", "恒温现场有助于降低温度变化对尺寸稳定性的影响。", equipmentImages.workshop01],
      ["恒温环境", "恒温加工现场 02", "生产设备在受控环境中进行加工。", equipmentImages.workshop02],
      ["恒温环境", "恒温加工现场 03", "线切割和放电设备区域的现场状态。", equipmentImages.workshop03],
      ["恒温环境", "恒温加工现场 04", "用于高精度加工的现场配置。", equipmentImages.workshop04],
      ["恒温环境", "恒温加工现场 05", "设备与检测区域保持稳定作业条件。", equipmentImages.workshop05],
      ["恒温环境", "恒温加工现场 06", "精密加工现场设备布置。", equipmentImages.workshop06],
      ["检测设备", "检测室整体环境", "检测室用于尺寸确认、形状确认与最终检验。", equipmentImages.inspectionRoom],
      ["检测设备", "高度规", "用于高度、外径和位置相关尺寸测量。", equipmentImages.heightGauge],
      ["检测设备", "投影测量设备", "用于刃部形状、轮廓与微细特征确认。", equipmentImages.projector],
      ["检测设备", "工具显微镜", "用于孔形、细小轮廓和局部形状检查。", equipmentImages.microscope],
      ["检测设备", "表面粗糙度测定机", "用于面粗度确认与表面状态评价。", equipmentImages.roughnessTester],
      ["检测设备", "高度测量设备", "检验区的高度测量设备。", equipmentImages.cmm],
    ],
    quality: {
      route: "多数制造设备和工序在厂内完成，部分工序采用外协。每个项目的加工路线、合作方工序和检验要求均在评审时确认。",
      eyebrow: "Quality Assurance",
      title: "恒温加工与检测，支撑可验证的尺寸稳定性",
      body:
        "通过恒温加工环境与标准化检测方法，提升精密零部件尺寸稳定性。ISO 9001:2015 认证范围为精密模具配件的生产。金一精密拥有并在厂内使用 Hexagon 686 三坐标测量机（CMM），按项目要求和约定的检验计划进行尺寸检验。",
    },
    qualityCards: [
      ["22°C ±0.5°C 恒温管理", "指定温控加工区域保持 22°C ±0.5°C，检测室维持相同环境条件。该说明不适用于整个工厂或全部外协区域。"],
      ["ISO9001:2015", "认证范围：精密模具配件的生产。"],
      ["按部位建立检测方法", "外径、孔形、孔距、直角度、刃部形状、面粗度均有对应测量方法。"],
    ],
    inspections: [
      ["外径 / 高度", "TRIMOS 高度规、Nikon 高度规"],
      ["孔形 / 刃部形状", "工具显微镜、50 倍投影机、精密千分尺"],
      ["板件孔位 / 孔距", "三次元测量、投影机、高度规"],
      ["面粗度", "表面粗糙度测定机"],
    ],
    products: {
      eyebrow: "Product Examples",
      title: "覆盖精密零部件、圆针、陶瓷与精密板件",
      body:
        "以代表性加工案例展示可对应的零件类型、材料范围与典型应用场景。",
    },
    productCards: [
      ["精密零部件 / 镶件", "超硬、钢材、异形冲头与精密镶件。", sharedImages.moldSet],
      ["PG 异形刃口", "细小轮廓、台阶、R 角与薄刃加工。", sharedImages.profileParts],
      ["圆针与成形件", "超硬、钢材圆针及特殊形状零件。", sharedImages.roundPins],
      ["陶瓷精密零部件", "ZKA-901、NPZ 系列等陶瓷材料加工。", sharedImages.ceramic],
      ["精密板件", "小型精密 plate、孔位与型腔加工。", sharedImages.plates],
      ["细线切割微小件", "细线割、窄槽与微小轮廓加工。", sharedImages.smallWire],
      ["成形精密零件", "用于展示成形研磨零件；具体材质以项目图纸为准。", sharedImages.tungsten],
    ],
    materials: {
      eyebrow: "Materials & Coatings",
      title: "从日本材到台湾/中国替代材，兼顾品质与成本",
      body:
        "可根据客户图纸、寿命要求和成本目标选择超硬、钢材、陶瓷与涂层方案。",
    },
    materialCards: [
      ["日本超硬材料", ["KD10 / KD20 / ME40", "EF05 / EF10 / EF20", "FD15 / FD25 / RD30 / RD50"]],
      ["钢材", ["SK3 / SKH3 / SKH51", "SKD11 / SKD61", "SUS304 / ASP23 / ASP60"]],
      ["陶瓷材料", ["ZKA-901", "NPZ-28", "NPZ-1", "Z-KAC901：美国制造陶瓷加工案例；与ZKA-901分别记录"]],
      ["涂层与替代材", ["PVD / TiAlN", "DLC 0.5μm 以下", "台湾材、中国材可选"]],
    ],
    caseStudies: {
      eyebrow: "Case Studies",
      title: "典型项目场景",
      body: "以常见询盘类型展示金一精密在图纸评估、加工路线、材料选择与检测确认中的配合方式。",
    },
    caseStudyCards: [
      {
        tag: "Japan / Connector Punch",
        title: "连接器冲头",
        desc: "Material: Tungsten Carbide | Tolerance: ±0.002 mm | Market: Japan",
        points: ["要求：钨钢冲头具有精细刃口，并按图纸控制 ±0.002 mm 关键公差。", "工艺评估：关键轮廓考虑采用 PG 成型研磨并配合投影检测。", "检验重点：按确认图纸和约定测量方法核对轮廓、刃口状态与关键公差。"],
      },
      {
        tag: "Electronics / Ceramic Pin",
        title: "精密陶瓷定位针",
        desc: "Material: Precision Ceramic | Market: Electronics Industry",
        points: ["要求：用于电子制造治具的精密陶瓷定位零件，材料与尺寸以客户图纸为准。", "工艺评估：加工前确认接触面、边缘状态、检测基准、材料牌号与装夹风险。", "检验重点：按确认图纸核对尺寸、边缘状态与定位特征。"],
      },
      {
        tag: "Precision Mold / Wire EDM Insert",
        title: "线切割精密模具镶件",
        desc: "Process: Wire EDM | Market: Precision Mold Industry",
        points: ["要求：模具镶件具有复杂轮廓、小 R 角和受控孔位。", "工艺评估：加工前确认线径、切割路径、基准、避空区域与检测方法。", "检验重点：按确认图纸核对轮廓、最小圆角、孔位与装配关键尺寸。"],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "采购与工程团队常见问题",
      body: "提前确认图纸、材料、数量、公差和交期信息，可以让我们更快完成加工评估和报价。",
    },
    faqItems: [
      ["接受哪些图纸格式？", "询价评估可接受 PDF、STEP、STP、DWG 和 DXF 文件。正式报价优先提供标注公差的二维图纸。"],
      ["最小订购量是多少？", "可评估原型、小批量和定制订单。最小订购量取决于材料、加工工艺和检验要求。"],
      ["可以达到什么加工公差？", "公差取决于零件形状和材料。参考能力包括油线切割 ±0.001 mm，以及 PG 精密研磨参考公差 ±0.002 mm；实际结果取决于加工条件，并在图纸评审时确认。"],
      ["交期和询价响应时间是多少？", "交期取决于图纸复杂度、材料供应和数量。收到完整图纸后，我们以 24 小时内回复询价为目标。"],
      ["可以签署保密协议吗？", "可以。我们可针对保密图纸、模具设计和客户项目签署保密协议。"],
      ["是否服务海外客户？", "是的。Jinyi Precision 具有服务日本、东南亚、欧洲和北美国际客户的经验。"],
    ],
    blog: {
      eyebrow: "Technical Blog",
      title: "精密加工技术文章",
      allGuides: "查看全部技术指南",
      body: "面向采购、工程和品质团队整理线切割、PG 研磨、超硬与陶瓷零件相关知识。",
    },
    blogCards: [
      ["What is Wire EDM?", "了解线切割 EDM 的工作原理、适用零件和询价注意事项。", "blog/what-is-wire-edm/"],
      ["Wire EDM vs CNC Machining", "比较线切割和 CNC 加工在精密零部件中的适用场景。", "blog/wire-edm-vs-cnc-machining/"],
      ["What is PG Grinding?", "说明 PG profile grinding 在异形刃口和超硬零件中的价值。", "blog/what-is-pg-grinding/"],
      ["Advantages of Tungsten Carbide Parts", "理解超硬零件在耐磨、寿命和精密模具中的优势。", "blog/advantages-of-tungsten-carbide-parts/"],
      ["Ceramic Parts for Precision Manufacturing", "介绍陶瓷零件在绝缘、耐磨和精密制造中的应用。", "blog/ceramic-parts-for-precision-manufacturing/"],
    ],
    customers: {
      eyebrow: "客户经验",
      title: "具备服务日系及国际制造客户的经验",
      body:
        "我们服务于连接器、电子部件、精密冲压与精密制造相关领域客户，理解高精度零部件对品质、交期与工程沟通的要求。",
    },
    customersList: [
      "广濑电机（东莞、印度尼西亚、日本）",
      "松下带广",
      "莫仕",
      "榎本",
      "UGM",
      "中日 Craft",
      "京瓷（东莞）",
      "藤井精工",
      "富士冲压",
      "山本制作所",
      "其他多家日系制造商",
    ],
    contact: {
      eyebrow: "Contact",
      title: "发送图纸、材料与数量要求，获取加工评估",
      body:
        "请提供 2D/3D 图纸、材料、数量、公差、表面处理与交期要求，便于快速评估。",
      email: `Email: ${contact.email}`,
      whatsapp: `WhatsApp: ${contact.whatsapp}`,
      address: `地址：${contact.addressZh}`,
    },
    form: {
      name: "姓名 / 公司",
      contact: "邮箱 / WhatsApp",
      material: "材料",
      quantity: "数量",
      project: "产品 / 工序",
      tolerance: "关键公差 / 表面要求",
      message: "加工要求",
      upload: "图纸发送说明",
      note: "您可以直接通过邮件发送图纸，无需先提交表单。表单可用于初步咨询，不支持附件上传。",
      drawingNote: "将打开您的邮件应用。请在邮件中附上 PDF、STEP 或 CAD 图纸。",
      submit: "发送询价",
      whatsappSubmit: "WhatsApp 聊天",
      subject: "金一精密询价",
      bodyLabels: ["姓名 / 公司", "联系方式", "材料", "数量", "产品 / 工序", "关键公差 / 表面要求", "加工要求"],
      success: "已收到您的 RFQ 表单。请通过 Email 或 WhatsApp 继续发送图纸，我们会尽快回复。",
      error: "提交未成功，请重试，或直接通过邮件 / WhatsApp 联系我们。",
      configuring: "Formspree 表单 ID 尚未配置，请先替换表单 endpoint。",
    },
    footer: {
      copy: "精密零部件加工 | PG 成型研磨 | 线切割 | 镜面 EDM",
    },
    lightbox: {
      close: "关闭图片预览",
    },
  },
  ja: {
    metaTitle: "精密部品カスタム加工 | ワイヤーカット・PG研削 | Jinyi Precision",
    metaDescription: "金型、コネクタ、自動化機器メーカー向けの精密部品、ワイヤーカット、PG研削、超硬・セラミック部品の受託加工。見積依頼に24時間以内で回答。",
    company: {
      shortName: "Jinyi Precision",
      fullName: "東莞市金一精密科技有限公司",
    },
    nav: {
      about: "会社概要",
      services: "サービス",
      capabilities: "加工能力",
      quality: "品質保証",
      products: "製品事例",
      blog: "技術記事",
      contact: "お問い合わせ",
      quote: "お問い合わせを送信",
    },
    hero: {
      eyebrow: "精密部品加工メーカー",
      title: "精密部品の高精度カスタム加工",
      lead:
        "高精度研削、細線ワイヤーカット、鏡面放電加工を軸に、コネクタ、精密部品、自動化部品向けの加工に対応します。",
      primaryCta: "図面をメールで送る",
      secondaryCta: "加工能力を見る",
      photoMain: "PG成形研削の精密異形部品",
      photoSide: "恒温 EDM 加工現場",
    },
    metrics: [
      ["20+ Years", "精密加工経験"],
      ["ISO9001", "品質認証"],
      ["24 Hours", "RFQ 迅速対応"],
      ["±0.001 mm", "油ワイヤー参考公差"],
    ],
    trust: [
      ["図面で検討", "PG最小コーナーR"],
      ["φ0.05-φ0.20 mm", "油 / 水ワイヤー線径範囲"],
      ["図面で検討", "PG研削面粗さ"],
      ["AD30LS", "Sodick 鏡面放電加工設備"],
    ],
    about: {
      eyebrow: "Company Profile",
      title: "高精度・短納期・安定品質を軸にした加工体制",
      body:
        "金一精密は精密部品のカスタム加工に注力し、特に超硬材、電子部品向け精密金属部品、プロファイル研削、細線ワイヤーカットを得意としています。国内外のお客様とのコミュニケーションを重視し、品質第一と短納期でニーズに対応します。",
    },
    strengths: [
      ["超硬材と電子部品向け加工", "電子部品向け精密金属部品を得意とし、超硬材、鋼材、セラミック材に対応。コネクタ、精密プレス、自動化部品に対応します。"],
      ["精度と面粗度へのこだわり", "加工環境、設備選定、測定方法を通じて、寸法安定性と面粗度、検証可能な測定データを重視します。"],
      ["代表者の PG 技術背景", "会社代表者はプロファイル加工技術者出身で、複雑な異形部品の工程検討に強みがあります。"],
      ["多種類コーティング対応", "PVD、TiAlN、DLC、HA、UPC など、寿命・摩擦・膜厚条件に応じたコーティング提案が可能です。"],
      ["日本材と代替材の選択", "日本材に加え、品質とコスト条件に応じて台湾材・中国材にも対応。品質保証は金一が責任を持って行います。"],
      ["内製と協力工場の連携", "超硬材以外の樹脂成形関連部品、ダイセット、プレート、丸物部品も協力工場と連携して対応します。"],
    ],
    capabilities: {
      eyebrow: "Manufacturing Capability",
      title: "PG 研削から油ワイヤーまで、精密部品の主要工程に対応",
      body:
        "購買・技術担当者が確認しやすいように、設備構成、加工精度、面粗度、対応可能サイズを明確に整理しています。",
    },
    capabilityCards: [
      {
        title: "PG プロファイル研削",
        desc: "日本製 WAIDA CNC プロファイル研削盤により、高精度の異形刃先、パンチ、インサート、超硬精密部品を加工します。 達成可能な結果は、部品形状、材料および加工条件により異なります。",
        meta: ["WAIDA PGX-2500SP x6", "参考公差 ±0.002 mm", "PG表面粗さは図面で検討"],
      },
      {
        title: "油 / 水ワイヤーカット",
        desc: "西部電機の水加工・油加工ワイヤ放電加工機で、細線、微小 R、精密輪郭加工に対応します。",
        meta: ["線径 φ0.05-φ0.20 mm", "水切 ±0.002 mm", "油切 ±0.001 mm"],
      },
      {
        title: "Sodick 鏡面放電",
        desc: "Sodick AD30LS により、微細放電、鏡面放電、複雑な微細形状の加工に対応します。",
        meta: ["AD30LS", "スチール類 Ra0.4 µm / 超硬 Ra0.13 µm", "公差 ±0.005 mm"],
      },
      {
        title: "研削 / CNC / プレート",
        desc: "精密研削工程 などの研削設備と機械加工・協力工場により、プレートや治具部品にも対応します。",
        meta: ["精密研削", "CNC 成形研削"],
      },
    ],
    services: {
      eyebrow: "Core Services",
      title: "海外調達向けの精密部品加工サービス",
      body: "主要工程と部品種類ごとにサービスページを整理し、購買・技術・品質担当者が加工範囲と見積条件を確認しやすくしています。",
    },
    serviceLinks: [
      ["ワイヤーカット精密部品", "細線、水ワイヤー、油ワイヤーにより、微小 R、複雑輪郭、高精度プレートに対応します。", "wire-edm-parts/"],
      ["PG プロファイル研削", "WAIDA PG profile grinding により、異形刃先、パンチ、インサート、超硬材に対応します。", "pg-grinding/"],
      ["超硬精密部品", "KD / EF / FD / RD などの超硬材を使用し、耐摩耗パンチ、刃先、精密インサートに対応します。", "tungsten-carbide-parts/"],
      ["セラミック部品", "ZKA-901、NPZ 系セラミック材を加工し、絶縁、耐摩耗、精密位置決め用途に対応します。", "ceramic-parts/"],
      ["精密金型部品", "精密プレート、コア、インサート、小型金型部品の加工をサポートします。", "precision-mold-components/"],
    ],
    equipment: {
      eyebrow: "Equipment",
      title: "確認済み設備と資料記載仕様",
      body:
        "現行情報を確認できる設備のみ掲載しています。寸法は会社紹介資料の第9ページに基づき、完成品の最大寸法や有効加工ストロークを保証するものではありません。西部電機の水加工ワイヤ放電加工機は合計8台で、油加工機とは区別しています。",
      imageOne: "会社紹介資料：放電加工現場写真",
      imageTwo: "会社紹介資料：精密研削設備写真",
      galleryEyebrow: "Equipment Gallery",
      galleryTitle: "設備写真ギャラリー",
      galleryBody: "会社紹介資料の写真を工程・現場・検査別に掲載しています。現行設備台帳ではなく、確認済み設備は上表に記載しています。",
    },
    equipmentColumns: ["NO", "機械設備", "数量", "資料記載設備仕様", "備考"],
    equipmentRows: [
      ["1", "WAIDA プロファイル研磨盤 PGX-2500SP", "6", "100 mm × 100 mm × 150 mm", "参考公差 ±0.002 mm"],
      ["2", "西部電機水加工ワイヤ放電加工機 MP250S", "1", "250 mm x 180 mm x 80 mm", "線径 φ0.2 mm、最小 R0.12 mm、公差 ±0.002 mm"],
      ["3", "西部電機水加工ワイヤ放電加工機 M50A", "5", "500 mm x 300 mm x 80 mm", "線径 φ0.1-φ0.2 mm、最小 R0.065 mm、公差 ±0.002 mm"],
      ["4", "西部電機水加工ワイヤ放電加工機 MM50A", "1", "500 mm x 300 mm x 80 mm", "線径 φ0.07-φ0.2 mm、最小 R0.05 mm、公差 ±0.002 mm"],
      ["5", "西部線切割機 M50B", "1", "500 mm x 350 mm x 80 mm", "線径 φ0.1-φ0.2 mm、最小 R0.065 mm、公差 ±0.002 mm"],
      ["6", "西部電機油ワイヤカット加工機 M25LP", "—", "250 mm x 250 mm x 80 mm", "線径 φ0.05-φ0.2 mm、最小 R0.035 mm、公差 ±0.001 mm"],
      ["9", "Sodick 鏡面放電加工機 AD30LS", "—", "320 mm x 200 mm x 230 mm", "スチール類 Ra0.4 µm、超硬 Ra0.13 µm、公差 ±0.005 mm"],
      ["CMM", "Hexagon 686 三次元測定機", "—", "—", "自社保有・社内運用"],
    ],
    equipmentGallery: [
      ["PG 研削", "WAIDA PG 加工現場", "CNC プロファイル研削設備により、高精度の異形刃先、パンチ、超硬部品に対応します。", equipmentImages.pgWorkshop],
      ["PG 研削", "PGX-2500SP 設備詳細", "プロファイル輪郭研削と微細形状加工に使用します。", equipmentImages.pgMachine],
      ["ワイヤーカット", "西部電機ワイヤーカット設備群", "細線、微小 R、高精度輪郭加工に対応します。", equipmentImages.wireLine],
      ["ワイヤーカット", "油 / 水ワイヤーカット単機", "精密輪郭、狭溝、微細穴位置関連の加工に使用します。", equipmentImages.wireMachine],
      ["鏡面 EDM", "Sodick 鏡面放電加工機", "微細放電、鏡面放電、複雑な型部位加工に対応します。", equipmentImages.sodickEdm],
      ["精密研削", "資料写真：精密研削設備", "平面、成形、高安定性が必要な精密研削に対応します。", equipmentImages.mitsuiGrinding],
      ["CNC 成形研削", "CNC 成形研削加工エリア", "複雑形状、段差、輪郭面の安定加工に使用します。", equipmentImages.cncGrinding],
      ["投影研削", "光学投影研削設備", "小型精密部品の輪郭確認と精密成形加工に使用します。", equipmentImages.opticalGrinding],
      ["協力設備", "協力会社設備概要", "プレート、治具、一部機械加工ニーズを補完する協力体制です。", equipmentImages.partnerEquipment],
      ["恒温環境", "恒温加工現場 01", "恒温環境は温度変化による寸法安定性への影響を低減します。", equipmentImages.workshop01],
      ["恒温環境", "恒温加工現場 02", "管理された環境で生産設備を運用しています。", equipmentImages.workshop02],
      ["恒温環境", "恒温加工現場 03", "ワイヤーカットおよび放電加工設備エリアの現場です。", equipmentImages.workshop03],
      ["恒温環境", "恒温加工現場 04", "高精度加工のための現場設備構成です。", equipmentImages.workshop04],
      ["恒温環境", "恒温加工現場 05", "設備と検査エリアを安定した作業条件で管理します。", equipmentImages.workshop05],
      ["恒温環境", "恒温加工現場 06", "精密加工現場の設備配置です。", equipmentImages.workshop06],
      ["検査設備", "検査室全体環境", "寸法確認、形状確認、最終検査に使用します。", equipmentImages.inspectionRoom],
      ["検査設備", "ハイトゲージ", "高さ、外径、位置関連寸法の測定に使用します。", equipmentImages.heightGauge],
      ["検査設備", "投影測定設備", "刃部形状、輪郭、微細特徴の確認に使用します。", equipmentImages.projector],
      ["検査設備", "工具顕微鏡", "穴形状、微細輪郭、局部形状の検査に使用します。", equipmentImages.microscope],
      ["検査設備", "面粗さ測定機", "面粗さ確認と表面状態評価に使用します。", equipmentImages.roughnessTester],
      ["検査設備", "高さ測定設備", "検査エリアの高さ測定設備です。", equipmentImages.cmm],
    ],
    quality: {
      route: "製造設備・工程の多くは社内で対応し、一部工程は外部と連携します。各案件で加工経路、協力先の工程と検査要求を確認します。",
      eyebrow: "Quality Assurance",
      title: "恒温加工と恒温検査で、検証可能な寸法安定性を支えます",
      body:
        "恒温加工環境と標準化された検査方法により、精密部品の寸法安定性を支えます。ISO 9001:2015 の認証範囲は精密金型部品の製造です。金一精密は Hexagon 686 三次元測定機（CMM）を自社で保有・運用し、案件の要求と合意した検査計画に基づいて寸法検査を行います。",
    },
    qualityCards: [
      ["22°C ±0.5°C 恒温管理", "指定の温度管理加工エリアは 22°C ±0.5°C に維持し、検査室も同じ環境条件に保ちます。工場全体やすべての外注先エリアに適用するものではありません。"],
      ["ISO9001:2015", "認証範囲：精密金型部品の製造。"],
      ["部位別検査方法", "外径、穴形状、穴ピッチ、直角度、刃部形状、面粗さごとに測定方法を設定しています。"],
    ],
    inspections: [
      ["外径 / 高さ", "TRIMOS ハイトゲージ、Nikon ハイトゲージ"],
      ["穴形状 / 刃部形状", "工具顕微鏡、50 倍投影機、精密マイクロメータ"],
      ["プレート穴位置 / ピッチ", "三次元測定機、投影機、ハイトゲージ"],
      ["面粗さ", "面粗さ測定機"],
    ],
    products: {
      eyebrow: "Product Examples",
      title: "精密部品、丸ピン、セラミック、精密プレートまで対応",
      body:
        "代表的な加工事例を通じて、対応可能な部品種類、材料範囲、主な用途を分かりやすく示しています。",
    },
    productCards: [
      ["精密部品 / インサート", "超硬、鋼材、異形パンチ、精密インサート。", sharedImages.moldSet],
      ["PG 異形刃先", "微細輪郭、段差、R 形状、薄刃加工。", sharedImages.profileParts],
      ["丸ピン・成形部品", "超硬、鋼材丸ピン、特殊形状部品。", sharedImages.roundPins],
      ["セラミック精密部品", "ZKA-901、NPZ 系列などのセラミック材加工。", sharedImages.ceramic],
      ["精密プレート", "小型精密プレート、穴位置、キャビティ加工。", sharedImages.plates],
      ["細線ワイヤー微細部品", "細線加工、狭溝、微小輪郭加工。", sharedImages.smallWire],
      ["成形精密部品", "成形研削部品の例。材質は案件図面に基づき確認します。", sharedImages.tungsten],
    ],
    materials: {
      eyebrow: "Materials & Coatings",
      title: "日本材から台湾・中国材まで、品質とコストを両立",
      body:
        "図面、寿命要求、コスト目標に応じて、超硬材、鋼材、セラミック、コーティングを選定できます。",
    },
    materialCards: [
      ["日本製 超硬材", ["KD10 / KD20 / ME40", "EF05 / EF10 / EF20", "FD15 / FD25 / RD30 / RD50"]],
      ["鋼材", ["SK3 / SKH3 / SKH51", "SKD11 / SKD61", "SUS304 / ASP23 / ASP60"]],
      ["セラミック材", ["ZKA-901", "NPZ-28", "NPZ-1", "Z-KAC901：米国製セラミックの加工事例。ZKA-901とは別に記載"]],
      ["コーティング・代替材", ["PVD / TiAlN", "DLC 0.5μm 以下", "台湾材・中国材対応"]],
    ],
    caseStudies: {
      eyebrow: "Case Studies",
      title: "代表的なプロジェクト例",
      body: "図面評価、工程設計、材料選定、検査確認における金一精密の対応方法を、よくある案件タイプで示します。",
    },
    caseStudyCards: [
      {
        tag: "Japan / Connector Punch",
        title: "コネクタ用パンチ",
        desc: "Material: Tungsten Carbide | Tolerance: ±0.002 mm | Market: Japan",
        points: ["要求：超硬パンチの微細刃先と、図面で指定された ±0.002 mm の重要公差。", "工程検討：重要輪郭に PG プロファイル研削と投影検査を適用する工程を検討します。", "検証項目：承認図面と合意した測定方法に基づき、輪郭、刃先状態、重要公差を確認します。"],
      },
      {
        tag: "Electronics / Ceramic Pin",
        title: "精密セラミック位置決めピン",
        desc: "Material: Precision Ceramic | Market: Electronics Industry",
        points: ["要求：電子製造治具用の精密セラミック位置決め部品。材質と寸法は顧客図面に基づきます。", "工程検討：接触面、エッジ状態、測定基準、セラミック材質、取扱いリスクを加工前に確認します。", "検証項目：承認図面に基づき、寸法、エッジ状態、位置決め形状を確認します。"],
      },
      {
        tag: "Precision Mold / Wire EDM Insert",
        title: "ワイヤーカット金型インサート",
        desc: "Process: Wire EDM | Market: Precision Mold Industry",
        points: ["要求：複雑輪郭、小 R、管理された穴位置を持つ金型インサート。", "工程検討：加工前にワイヤ径、切断経路、基準、逃げ部、検査方法を確認します。", "検証項目：承認図面に基づき、輪郭、最小 R、穴位置、組付け重要寸法を確認します。"],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "購買・技術担当者からのよくある質問",
      body: "図面、材料、数量、公差、納期を事前に共有いただくことで、加工可否と見積をより早く確認できます。",
    },
    faqItems: [
      ["対応可能な図面形式は何ですか？", "PDF、STEP、STP、DWG、DXF を受け付けています。正式見積には公差入り 2D 図面が最も有効です。"],
      ["最小注文数量はいくつですか？", "試作、小ロット、カスタム品を評価できます。MOQ は材料、工程、検査要求により異なります。"],
      ["どの程度の加工公差に対応できますか？", "公差は材料と形状により異なります。参考として油ワイヤー EDM は ±0.001 mm、PG 精密研削の参考公差は ±0.002 mm です。達成可能な結果は加工条件により異なり、図面確認時に合意します。"],
      ["納期と見積依頼への回答時間を教えてください。", "納期は図面難易度、材料、数量により異なります。図面情報が揃っていれば 24 時間以内の RFQ 回答を目標にしています。"],
      ["秘密保持契約を締結できますか？", "はい。機密図面、金型設計、顧客プロジェクトに関する NDA 締結に対応できます。"],
      ["海外のお客様にも対応していますか？", "はい。Jinyi Precision は日本、東南アジア、欧州、北米のお客様への対応経験があります。"],
    ],
    blog: {
      eyebrow: "Technical Blog",
      title: "精密加工に関する技術記事",
      allGuides: "技術ガイドをすべて見る",
      body: "購買・技術・品質担当者向けに、ワイヤーカット、PG 研削、超硬部品、セラミック部品の基礎情報を整理しています。",
    },
    blogCards: [
      ["What is Wire EDM?", "ワイヤーカット EDM の仕組み、適用部品、見積時の注意点を説明します。", "blog/what-is-wire-edm/"],
      ["Wire EDM vs CNC Machining", "精密部品におけるワイヤーカットと CNC 加工の使い分けを比較します。", "blog/wire-edm-vs-cnc-machining/"],
      ["What is PG Grinding?", "異形刃先と超硬部品における PG profile grinding の価値を説明します。", "blog/what-is-pg-grinding/"],
      ["Advantages of Tungsten Carbide Parts", "耐摩耗性、寿命、精密金型での超硬部品のメリットを紹介します。", "blog/advantages-of-tungsten-carbide-parts/"],
      ["Ceramic Parts for Precision Manufacturing", "絶縁、耐摩耗、精密位置決め用途におけるセラミック部品を解説します。", "blog/ceramic-parts-for-precision-manufacturing/"],
    ],
    customers: {
      eyebrow: "Customer Experience",
      title: "日系・国際製造業のお客様への対応経験",
      body:
        "コネクタ、電子部品、精密プレス、精密加工関連分野のお客様に対応し、高精度部品に求められる品質、納期、技術コミュニケーションを重視しています。",
    },
    customersList: [
      "ヒロセ電機（東莞、インドネシア、日本）",
      "パナソニック帯広（株）",
      "モレックス（株）",
      "エノモト（株）",
      "UGM（株）",
      "中日クラフト（株）",
      "京セラ（東莞）",
      "藤井精工（株）",
      "富士プレス（株）",
      "山本製作所（株）",
      "ほか日系メーカー多数",
    ],
    contact: {
      eyebrow: "Contact",
      title: "図面・材料・数量条件をお送りください",
      body:
        "2D / 3D 図面、材料、数量、公差、表面処理、納期条件をご共有いただくと、より早く加工可否と概算を確認できます。",
      email: `Email: ${contact.email}`,
      whatsapp: `WhatsApp: ${contact.whatsapp}`,
      address: `Address: ${contact.address}`,
    },
    form: {
      name: "お名前 / 会社名",
      contact: "メール / WhatsApp",
      material: "材料",
      quantity: "数量",
      project: "製品 / 工程",
      tolerance: "重要公差 / 面要求",
      message: "加工要求",
      upload: "図面送付について",
      note: "図面はフォームを送信せずに直接メールでお送りいただけます。フォームは初回のお問い合わせ用で、添付ファイルには対応していません。",
      drawingNote: "メールアプリが開きます。PDF、STEP または CAD 図面をメールに添付してください。",
      submit: "お問い合わせを送信",
      whatsappSubmit: "WhatsApp でチャット",
      subject: "金一精密 見積依頼",
      bodyLabels: ["お名前 / 会社名", "連絡先", "材料", "数量", "製品 / 工程", "重要公差 / 面要求", "加工要求"],
      success: "RFQ フォームを受け付けました。図面は Email または WhatsApp で続けてお送りください。確認後、早急に返信します。",
      error: "送信できませんでした。再度お試しいただくか、メール / WhatsApp でご連絡ください。",
      configuring: "Formspree フォーム ID が未設定です。endpoint を置き換えてください。",
    },
    footer: {
      copy: "精密部品加工 | PG プロファイル研削 | ワイヤーカット | 鏡面 EDM",
    },
    lightbox: {
      close: "画像プレビューを閉じる",
    },
  },
  en: {
    metaTitle: "Precision Components Manufacturer | Jinyi Precision",
    metaDescription: "Custom precision components, wire EDM, PG grinding, carbide and ceramic parts for mold, connector and automation manufacturers. 24-hour RFQ response.",
    company: {
      shortName: "Jinyi Precision",
      fullName: "Dongguan Jinyi Precision Technology Co., Ltd.",
    },
    nav: {
      about: "About",
      services: "Services",
      capabilities: "Capabilities",
      quality: "Quality",
      products: "Products",
      blog: "Blog",
      contact: "Contact",
      quote: "Send an Inquiry",
    },
    hero: {
      eyebrow: "Precision Components Manufacturer",
      title: "Custom Machining for Precision Components",
      lead:
        "Focused on high-precision grinding, fine wire EDM and mirror EDM for connector, precision component and automation customers.",
      primaryCta: "Email Your Drawings",
      secondaryCta: "View Capabilities",
      photoMain: "PG profile-ground precision components",
      photoSide: "Temperature-controlled EDM workshop",
    },
    metrics: [
      ["20+ Years", "Precision machining experience"],
      ["ISO9001", "Certified quality system"],
      ["24 Hours", "RFQ response"],
      ["±0.001 mm", "Oil wire EDM reference tolerance"],
    ],
    trust: [
      ["Drawing review", "Minimum corner radius for PG grinding"],
      ["φ0.05-φ0.20 mm", "Oil / water wire EDM diameter"],
      ["By drawing", "PG grinding surface finish"],
      ["AD30LS", "Sodick mirror EDM equipment"],
    ],
    about: {
      eyebrow: "Company Profile",
      title: "A manufacturing system built around accuracy, delivery and stable quality",
      body:
        "Jinyi Precision focuses on custom precision component machining, especially carbide parts, precision metal components for electronic parts, profile grinding and fine wire EDM. The company values communication with domestic and overseas customers and focuses on quality, responsive communication and timely delivery.",
    },
    strengths: [
      ["Carbide and electronics experience", "Strong in precision metal components for electronic parts, with carbide, steel and ceramic material support for connectors, precision stamping and automation parts."],
      ["Dimensional Accuracy and Surface Finish", "Processing environment, equipment selection and measurement methods are built around dimensional stability, surface roughness and verifiable data."],
      ["Profile Grinding Expertise", "Profile grinding experience supports more reliable process planning for complex forms, miniature blade features and carbide components."],
      ["Coating support", "PVD, TiAlN, DLC, HA and UPC coating options can be selected according to life, friction and film-thickness requirements."],
      ["Japanese materials and alternatives", "In addition to Japanese materials, alternatives from Taiwan and China can be selected to meet quality and cost requirements, with Jinyi responsible for quality assurance."],
      ["Internal and partner capacity", "Beyond carbide parts, resin-molding related components, die sets, plates and round parts can be supported through partner factories."],
    ],
    capabilities: {
      eyebrow: "Manufacturing Capability",
      title: "Core precision component processes from PG grinding to oil wire EDM",
      body:
        "Equipment configuration, machining accuracy, surface roughness and workable sizes are presented clearly for RFQ and engineering review.",
    },
    capabilityCards: [
      {
        title: "PG Profile Grinding",
        desc: "Japanese WAIDA CNC profile grinding for high-precision formed edges, punches, inserts and carbide precision components. Actual achievable results depend on component geometry, material and machining conditions.",
        meta: ["WAIDA PGX-2500SP x6", "Reference tolerance ±0.002 mm", "PG surface finish reviewed per drawing"],
      },
      {
        title: "Oil / Water Wire EDM",
        desc: "Seibu Electric water-dielectric and oil-dielectric wire EDM support fine-wire cutting and precision contours.",
        meta: ["Wire φ0.05-φ0.20 mm", "Water wire ±0.002 mm", "Oil wire ±0.001 mm"],
      },
      {
        title: "Sodick Mirror EDM",
        desc: "Sodick AD30LS machines support fine EDM, mirror EDM and complex micro-feature processing.",
        meta: ["AD30LS", "Steel Ra0.4 µm / Tungsten carbide Ra0.13 µm", "Tolerance ±0.005 mm"],
      },
      {
        title: "Grinding / CNC / Plates",
        desc: "Precision grinding, machining and selected partner operations support plates and fixture components.",
        meta: ["Precision grinding", "CNC form grinding"],
      },
    ],
    services: {
      eyebrow: "Core Services",
      title: "Precision Machining Services for Industrial Buyers",
      body: "Explore our machining services, materials and inspection information to find the right process for your components.",
    },
    serviceLinks: [
      ["Wire EDM Parts", "Fine wire, water wire and oil wire EDM for small R corners, complex contours and high-precision plates.", "wire-edm-parts/"],
      ["PG Grinding", "WAIDA PG profile grinding for formed edges, punches, inserts and carbide precision components.", "pg-grinding/"],
      ["Tungsten Carbide Parts", "KD / EF / FD / RD carbide materials for wear-resistant punches, blades and precision inserts.", "tungsten-carbide-parts/"],
      ["Ceramic Parts", "ZKA-901 and NPZ-series ceramic component machining for insulation, wear resistance and precise positioning.", "ceramic-parts/"],
      ["Precision Mold Components", "Precision plates, cores, inserts and small mold component machining support.", "precision-mold-components/"],
    ],
    equipment: {
      eyebrow: "Equipment",
      title: "Confirmed Equipment References",
      body:
        "Only equipment supported by current confirmations is listed. Specifications follow slide 9 of the company presentation; they do not guarantee maximum finished-part dimensions or effective machining travel. The Seibu Electric water-dielectric wire EDM group totals 8 machines and is separate from oil-dielectric wire EDM.",
      imageOne: "Company presentation: EDM workshop photograph",
      imageTwo: "Company presentation: precision grinding photograph",
      galleryEyebrow: "Equipment Gallery",
      galleryTitle: "Equipment Photo Gallery",
      galleryBody: "Company presentation photographs illustrate machining and inspection settings. They are not a current equipment inventory; the confirmed equipment references are listed above.",
    },
    equipmentColumns: ["NO", "Equipment", "Qty.", "Listed Equipment Specifications", "Notes"],
    equipmentRows: [
      ["1", "WAIDA profile grinding machine PGX-2500SP", "6", "100 mm × 100 mm × 150 mm", "Reference tolerance ±0.002 mm"],
      ["2", "Seibu Electric water-dielectric wire EDM MP250S", "1", "250 mm x 180 mm x 80 mm", "Wire φ0.2 mm, min. R0.12 mm, tolerance ±0.002 mm"],
      ["3", "Seibu Electric water-dielectric wire EDM M50A", "5", "500 mm x 300 mm x 80 mm", "Wire φ0.1-φ0.2 mm, min. R0.065 mm, tolerance ±0.002 mm"],
      ["4", "Seibu Electric water-dielectric wire EDM MM50A", "1", "500 mm x 300 mm x 80 mm", "Wire φ0.07-φ0.2 mm, min. R0.05 mm, tolerance ±0.002 mm"],
      ["5", "Seibu Electric water-dielectric wire EDM M50B", "1", "500 mm x 350 mm x 80 mm", "Wire φ0.1-φ0.2 mm, min. R0.065 mm, tolerance ±0.002 mm"],
      ["6", "Seibu Electric oil-dielectric wire EDM M25LP", "—", "250 mm x 250 mm x 80 mm", "Wire φ0.05-φ0.2 mm, min. R0.035 mm, tolerance ±0.001 mm"],
      ["9", "Sodick mirror EDM AD30LS", "—", "320 mm x 200 mm x 230 mm", "Steel Ra0.4 µm, tungsten carbide Ra0.13 µm, tolerance ±0.005 mm"],
      ["CMM", "Hexagon 686 coordinate measuring machine", "—", "—", "Company-owned and operated in-house"],
    ],
    equipmentGallery: [
      ["PG Grinding", "WAIDA PG workshop", "CNC profile grinding equipment supports formed edges, punches and carbide precision components.", equipmentImages.pgWorkshop],
      ["PG Grinding", "PGX-2500SP machine detail", "Used for profile contour grinding and micro formed features.", equipmentImages.pgMachine],
      ["Wire EDM", "Seibu wire EDM equipment line", "Supports fine wire, small R corners and high-precision contour cutting.", equipmentImages.wireLine],
      ["Wire EDM", "Oil / water wire EDM machine", "Used for precision contours, narrow slots and micro feature processing.", equipmentImages.wireMachine],
      ["Mirror EDM", "Sodick mirror EDM machine", "Supports fine EDM, mirror EDM and complex micro-feature processing.", equipmentImages.sodickEdm],
      ["Precision Grinding", "Presentation photograph: precision grinding equipment", "Used for flat grinding, form grinding and stable precision finishing.", equipmentImages.mitsuiGrinding],
      ["CNC Form Grinding", "CNC form grinding area", "Supports complex forms, steps and stable contour surface processing.", equipmentImages.cncGrinding],
      ["Optical Grinding", "Optical projection grinding equipment", "Used for contour checking and precision forming of small components.", equipmentImages.opticalGrinding],
      ["Partner Equipment", "Partner equipment overview", "Additional capacity for plates, fixtures and selected machining requirements.", equipmentImages.partnerEquipment],
      ["Controlled Environment", "Temperature-controlled workshop 01", "A controlled environment helps reduce dimensional impact from temperature variation.", equipmentImages.workshop01],
      ["Controlled Environment", "Temperature-controlled workshop 02", "Production equipment operates under controlled workshop conditions.", equipmentImages.workshop02],
      ["Controlled Environment", "Temperature-controlled workshop 03", "Wire EDM and EDM equipment area in operation.", equipmentImages.workshop03],
      ["Controlled Environment", "Temperature-controlled workshop 04", "Workshop setup for high-precision processing.", equipmentImages.workshop04],
      ["Controlled Environment", "Temperature-controlled workshop 05", "Equipment and inspection areas are managed under stable working conditions.", equipmentImages.workshop05],
      ["Controlled Environment", "Temperature-controlled workshop 06", "Equipment layout for precision processing.", equipmentImages.workshop06],
      ["Inspection Equipment", "Inspection room overview", "Used for dimensional checking, profile confirmation and final inspection.", equipmentImages.inspectionRoom],
      ["Inspection Equipment", "Height gauge", "Used for height, outer diameter and position-related measurements.", equipmentImages.heightGauge],
      ["Inspection Equipment", "Projection measuring equipment", "Used for blade shape, contour and micro-feature confirmation.", equipmentImages.projector],
      ["Inspection Equipment", "Toolmaker’s microscope", "Used for hole profile, fine contour and local feature inspection.", equipmentImages.microscope],
      ["Inspection Equipment", "Surface roughness tester", "Used for surface roughness confirmation and surface condition evaluation.", equipmentImages.roughnessTester],
      ["Inspection Equipment", "Height Measurement Equipment", "Height measurement equipment in the inspection area.", equipmentImages.cmm],
    ],
    quality: {
      route: "Most manufacturing equipment and processes are in-house, with selected external processing. The machining route, partner operations and inspection requirements are confirmed for each project.",
      eyebrow: "Quality Assurance",
      title: "Temperature-controlled processing and inspection for verifiable stability",
      body:
        "Temperature-controlled processing and standardized inspection methods support dimensional stability for precision components. Our ISO 9001:2015 certification scope is the production of precision mold accessories. Jinyi Precision owns and operates a Hexagon 686 coordinate measuring machine (CMM) in-house. Dimensional inspection follows the project requirements and agreed inspection plan.",
    },
    qualityCards: [
      ["22°C ±0.5°C control", "Designated temperature-controlled processing areas are maintained at 22°C ±0.5°C. The inspection room is maintained under the same environmental conditions. This does not describe the entire factory or all external processing areas."],
      ["ISO9001:2015", "Certification scope: Production of precision mold accessories."],
      ["Inspection by feature", "Outer diameter, hole profile, hole pitch, squareness, blade shape and surface roughness each have defined measurement methods."],
    ],
    inspections: [
      ["Outer diameter / height", "TRIMOS height gauge, Nikon height gauge"],
      ["Hole profile / blade shape", "Toolmaker’s microscope, 50x projector, precision micrometer"],
      ["Plate hole position / pitch", "CMM, projector, height gauge"],
      ["Surface roughness", "Surface roughness tester"],
    ],
    products: {
      eyebrow: "Product Examples",
      title: "Precision components, round pins, ceramics and precision plates",
      body:
        "Representative machining examples show supported component types, material ranges and typical application scenarios.",
    },
    productCards: [
      ["Precision Components / Inserts", "Carbide, steel, formed punches and precision inserts.", sharedImages.moldSet],
      ["PG Formed Edges", "Fine contours, steps, R corners and thin blade features.", sharedImages.profileParts],
      ["Round Pins and Formed Parts", "Carbide and steel round pins plus special formed components.", sharedImages.roundPins],
      ["Ceramic Precision Parts", "Ceramic processing including ZKA-901 and NPZ series materials.", sharedImages.ceramic],
      ["Precision Plates", "Small precision plates, hole positions and cavity processing.", sharedImages.plates],
      ["Fine Wire-Cut Micro Parts", "Fine wire EDM, narrow slots and micro contour processing.", sharedImages.smallWire],
      ["Formed Precision Parts", "Representative formed grinding components; material is confirmed per project drawing.", sharedImages.tungsten],
    ],
    materials: {
      eyebrow: "Materials & Coatings",
      title: "Japanese materials plus Taiwan and China alternatives for cost and quality balance",
      body:
        "Carbide, steel, ceramic and coating options can be selected according to drawings, service life requirements and cost targets.",
    },
    materialCards: [
      ["Japanese Carbide", ["KD10 / KD20 / ME40", "EF05 / EF10 / EF20", "FD15 / FD25 / RD30 / RD50"]],
      ["Steels", ["SK3 / SKH3 / SKH51", "SKD11 / SKD61", "SUS304 / ASP23 / ASP60"]],
      ["Ceramics", ["ZKA-901", "NPZ-28", "NPZ-1", "Z-KAC901: U.S.-made ceramic machining example; recorded separately from ZKA-901"]],
      ["Coatings & Alternatives", ["PVD / TiAlN", "DLC 0.5μm or less", "Taiwan and China materials available"]],
    ],
    caseStudies: {
      eyebrow: "Case Studies",
      title: "Representative project scenarios",
      body: "Common RFQ scenarios show how Jinyi Precision supports drawing review, process planning, material selection and dimensional inspection.",
    },
    caseStudyCards: [
      {
        tag: "Japan / Connector Punch",
        title: "Connector Punch",
        desc: "Material: Tungsten Carbide | Tolerance: ±0.002 mm | Market: Japan",
        points: ["Requirement: A tungsten carbide punch with a fine cutting edge and a specified critical tolerance of ±0.002 mm.", "Process review: PG profile grinding and optical projection inspection are considered for the critical contour.", "Verification: Confirm the profile, edge condition and specified tolerance against the approved drawing and agreed measurement method."],
      },
      {
        tag: "Electronics / Ceramic Pin",
        title: "Precision Ceramic Pin",
        desc: "Material: Precision Ceramic | Market: Electronics Industry",
        points: ["Requirement: A precision ceramic locating component for an electronics manufacturing fixture, with material and dimensions defined by the customer drawing.", "Process review: Contact surfaces, edge condition, inspection datums, ceramic grade and handling risk are confirmed before grinding.", "Verification: Confirm dimensions, edge condition and locating features against the approved drawing."],
      },
      {
        tag: "Precision Mold / Wire EDM Insert",
        title: "Wire EDM Mold Insert",
        desc: "Process: Wire EDM | Market: Precision Mold Industry",
        points: ["Requirement: A mold insert with complex contours, small radii and controlled hole positions.", "Process review: Wire diameter, cutting path, datum reference, relief areas and inspection method are confirmed before machining.", "Verification: Confirm the contour, minimum radius, hole position and assembly-critical dimensions against the approved drawing."],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Questions from purchasing and engineering teams",
      body: "Providing drawings, material specifications, quantities, tolerances and delivery requirements helps us assess manufacturability and prepare an accurate quotation.",
    },
    faqItems: [
      ["What file formats do you accept?", "Please send PDF, STEP, STP, DWG or DXF files. For final quotation, 2D drawings with tolerances and inspection datums are preferred."],
      ["What is your minimum order quantity?", "Prototype, small-batch and custom orders can be reviewed. MOQ depends on material, process route and inspection requirements."],
      ["What tolerance can you achieve?", "Tolerance depends on part geometry and material. Reference capabilities include oil wire EDM at ±0.001 mm and a reference PG precision grinding tolerance of ±0.002 mm. Actual achievable results depend on machining conditions and are confirmed during drawing review."],
      ["What is your lead time?", "Lead time depends on complexity, material and quantity. We target a 24-hour RFQ response after receiving complete drawings."],
      ["Can you sign an NDA?", "Yes. We can sign a non-disclosure agreement for confidential drawings, mold designs and customer projects."],
      ["Do you support overseas customers?", "Yes. Jinyi Precision has experience serving international customers across Japan, Southeast Asia, Europe, and North America."],
    ],
    blog: {
      eyebrow: "Technical Blog",
      title: "Precision machining articles for industrial buyers",
      allGuides: "View All Technical Guides",
      body: "Practical articles for purchasing managers, mechanical engineers and quality engineers evaluating wire EDM, PG grinding, carbide and ceramic components.",
    },
    blogCards: [
      ["What is Wire EDM?", "Understand wire EDM principles, applications, tolerances and RFQ requirements.", "blog/what-is-wire-edm/"],
      ["Wire EDM vs CNC Machining", "Compare wire EDM and CNC machining for precision component sourcing.", "blog/wire-edm-vs-cnc-machining/"],
      ["What is PG Grinding?", "Learn why PG profile grinding matters for formed edges and carbide components.", "blog/what-is-pg-grinding/"],
      ["Advantages of Tungsten Carbide Parts", "Review wear resistance, service life and tooling benefits of carbide parts.", "blog/advantages-of-tungsten-carbide-parts/"],
      ["Ceramic Parts for Precision Manufacturing", "Explore ceramic part applications in insulation, wear resistance and precision tooling.", "blog/ceramic-parts-for-precision-manufacturing/"],
    ],
    customers: {
      eyebrow: "Customer Experience",
      title: "Experience supporting Japanese and international manufacturers",
      body:
        "We support customers in connector, electronic component, precision stamping and precision manufacturing-related fields, with attention to quality, delivery and clear engineering communication.",
    },
    customersList: [
      "Hirose Electric (Dongguan, Indonesia, Japan)",
      "Panasonic Obihiro",
      "Molex",
      "Enomoto",
      "UGM",
      "Chunichi Craft",
      "Kyocera (Dongguan)",
      "Fujii Seiko",
      "Fuji Press",
      "Yamamoto Manufacturing",
      "Other Japanese manufacturers",
    ],
    contact: {
      eyebrow: "Contact",
      title: "Send drawings, material and quantity requirements for processing review",
      body:
        "Please share 2D / 3D drawings, material, quantity, tolerance, surface treatment and delivery requirements for faster evaluation.",
      email: `Email: ${contact.email}`,
      whatsapp: `WhatsApp: ${contact.whatsapp}`,
      address: `Address: ${contact.address}`,
    },
    form: {
      name: "Name / Company",
      contact: "Email / WhatsApp",
      material: "Material",
      quantity: "Quantity",
      project: "Product / Process",
      tolerance: "Key Tolerance / Surface Requirement",
      message: "Processing Requirements",
      upload: "Drawing delivery note",
      note: "You can email drawings directly without submitting this form. Use the form for an initial inquiry; it does not accept attachments.",
      drawingNote: "Opens your email app. Please attach your PDF, STEP or CAD drawings.",
      submit: "Send an Inquiry",
      whatsappSubmit: "Chat on WhatsApp",
      subject: "Jinyi Precision RFQ",
      bodyLabels: ["Name / Company", "Contact", "Material", "Quantity", "Product / Process", "Key Tolerance / Surface Requirement", "Processing Requirements"],
      success: "Thank you. Your inquiry has been submitted. If you would like to add drawings, please email them with your name and drawing number.",
      error: "Submission failed. Please try again or contact us by email / WhatsApp.",
      configuring: "The Formspree form ID is not configured yet. Please replace the form endpoint first.",
    },
    footer: {
      copy: "Precision components | PG profile grinding | Wire EDM | Mirror EDM",
    },
    lightbox: {
      close: "Close image preview",
    },
  },
};

const selectors = {
  metrics: document.querySelector("#hero-metrics"),
  trust: document.querySelector("#trust-list"),
  strengths: document.querySelector("#strength-grid"),
  capabilities: document.querySelector("#capability-grid"),
  services: document.querySelector("#service-link-grid"),
  equipment: document.querySelector("#equipment-table"),
  equipmentGallery: document.querySelector("#equipment-gallery"),
  quality: document.querySelector("#quality-cards"),
  inspections: document.querySelector("#inspection-methods"),
  products: document.querySelector("#product-grid"),
  materials: document.querySelector("#material-grid"),
  caseStudies: document.querySelector("#case-study-grid"),
  customers: document.querySelector("#customer-list"),
  faq: document.querySelector("#faq-list"),
  blog: document.querySelector("#blog-grid"),
};

const i18nNodes = [...document.querySelectorAll("[data-i18n]")];
const languageButtons = [...document.querySelectorAll("[data-lang]")];
let currentLanguage = "";

// 【优化说明】统一封装存储、转义和渲染入口，避免重复 DOM 查询，并降低动态 HTML 注入风险。
function readStoredLanguage() {
  try {
    return localStorage.getItem(LANG_KEY);
  } catch (error) {
    return "";
  }
}

function writeStoredLanguage(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (error) {
    // Storage can be blocked in private browsing; the current page still works without persistence.
  }
}

function getInitialLanguage() {
  const saved = readStoredLanguage();
  if (saved && content[saved]) return saved;
  return "en";
}

function setTextContent(lang) {
  const dict = content[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.title = dict.metaTitle;
  const metadata = {
    'meta[name="description"]': dict.metaDescription,
    'meta[property="og:title"]': dict.metaTitle,
    'meta[property="og:description"]': dict.metaDescription,
    'meta[property="og:locale"]': { en: "en_US", zh: "zh_CN", ja: "ja_JP" }[lang],
    'meta[name="twitter:title"]': dict.metaTitle,
    'meta[name="twitter:description"]': dict.metaDescription,
  };
  Object.entries(metadata).forEach(([selector, value]) => {
    document.querySelector(selector)?.setAttribute("content", value);
  });
  i18nNodes.forEach((node) => {
    const value = node.dataset.i18n.split(".").reduce((obj, key) => obj?.[key], dict);
    if (typeof value === "string") node.textContent = value;
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function safeHref(value) {
  const href = String(value || "#").trim();
  if (!href || /^(?:javascript|data|vbscript):/i.test(href)) return "#";
  return escapeAttr(href);
}

function imageAttrs(src, alt) {
  const [width, height] = imageMeta[src] || [800, 600];
  return `src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" width="${width}" height="${height}" loading="lazy" decoding="async"`;
}

function joinHtml(items, renderer) {
  return items.map(renderer).join("");
}

function renderList(container, items, renderer) {
  if (!container) return;
  if (!Array.isArray(items) || items.length === 0) {
    container.innerHTML = `<p class="empty-state">Content is being prepared.</p>`;
    return;
  }
  container.innerHTML = joinHtml(items, renderer);
}

function setupImageFallbacks(scope = document) {
  scope.querySelectorAll("img").forEach((image) => {
    if (image.dataset.fallbackReady) return;
    image.dataset.fallbackReady = "true";
    image.addEventListener(
      "error",
      () => {
        image.classList.add("image-load-failed");
        image.removeAttribute("srcset");
        if (!image.alt) image.alt = "Image unavailable";
      },
      { once: true },
    );
  });
}

function renderDynamicContent(lang) {
  const dict = content[lang];

  renderList(
    selectors.metrics,
    dict.metrics,
    ([value, label]) => `<div class="metric"><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`,
  );

  renderList(
    selectors.trust,
    dict.trust,
    ([value, label]) => `<div class="trust-item"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`,
  );

  renderList(
    selectors.strengths,
    dict.strengths,
    ([title, desc], index) => `
      <article class="strength-card">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(desc)}</p>
      </article>
    `,
  );

  renderList(
    selectors.capabilities,
    dict.capabilityCards,
    (item, index) => `
      <article class="capability-card">
        <div>
          <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.desc)}</p>
        </div>
        <div class="capability-meta">
          ${joinHtml(item.meta, (meta) => `<span>${escapeHtml(meta)}</span>`)}
        </div>
      </article>
    `,
  );

  renderList(
    selectors.services,
    dict.serviceLinks,
    ([title, desc, href], index) => `
      <a class="service-link-card" href="${safeHref(href)}">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(desc)}</p>
        <strong>${escapeHtml(lang === "en" ? "View Service" : lang === "ja" ? "詳しく見る" : "查看详情")}</strong>
      </a>
    `,
  );

  renderList(
    selectors.equipment,
    [dict.equipmentColumns, ...dict.equipmentRows],
    (row, index) => `
      <div class="spec-row ${index === 0 ? "spec-head" : ""}">
        ${row
          .map(
            (cell, cellIndex) => `
              <div ${index === 0 ? "" : `data-label="${escapeAttr(dict.equipmentColumns[cellIndex] || "")}"`}>
                ${
                  index === 0 || cellIndex < 3
                    ? `<strong>${escapeHtml(cell || "-")}</strong>`
                    : `<span>${escapeHtml(cell || "-")}</span>`
                }
              </div>
            `,
          )
          .join("")}
      </div>
    `,
  );

  renderList(
    selectors.equipmentGallery,
    dict.equipmentGallery,
    ([category, title, desc, image]) => `
      <article class="equipment-gallery-card">
        <figure>
          <div class="equipment-image">
            <img ${imageAttrs(image, title)} />
          </div>
          <div>
            <span>${escapeHtml(category)}</span>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(desc)}</p>
          </div>
        </figure>
      </article>
    `,
  );

  renderList(
    selectors.quality,
    dict.qualityCards,
    ([title, desc], index) => `
      <article class="quality-card">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(desc)}</p>
      </article>
    `,
  );

  renderList(
    selectors.inspections,
    dict.inspections,
    ([title, desc]) => `
      <article class="inspection-card">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(desc)}</p>
      </article>
    `,
  );

  renderList(
    selectors.products,
    dict.productCards,
    ([title, desc, image]) => `
      <article class="product-card">
        <figure><img ${imageAttrs(image, title)} /></figure>
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(desc)}</p>
        </div>
      </article>
    `,
  );

  renderList(
    selectors.materials,
    dict.materialCards,
    ([title, rows]) => `
      <article class="material-card">
        <h3>${escapeHtml(title)}</h3>
        <ul>
          ${joinHtml(rows, (row) => `<li>${escapeHtml(row)}</li>`)}
        </ul>
      </article>
    `,
  );

  renderList(
    selectors.caseStudies,
    dict.caseStudyCards,
    (item) => `
      <article class="case-study-card">
        <span>${escapeHtml(item.tag)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>
        <ul>
          ${joinHtml(item.points, (point) => `<li>${escapeHtml(point)}</li>`)}
        </ul>
      </article>
    `,
  );

  renderList(
    selectors.customers,
    dict.customersList,
    (name) => `<div class="customer-card">${escapeHtml(name)}</div>`,
  );

  renderList(
    selectors.faq,
    dict.faqItems,
    ([question, answer]) => `
      <details class="faq-item">
        <summary>${escapeHtml(question)}</summary>
        <p>${escapeHtml(answer)}</p>
      </details>
    `,
  );

  renderList(
    selectors.blog,
    dict.blogCards,
    ([title, desc, href]) => `
      <a class="blog-card" href="${safeHref(href)}">
        <span>${escapeHtml(lang === "en" ? "Article" : lang === "ja" ? "記事" : "文章")}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(desc)}</p>
      </a>
    `,
  );
}

function setLanguage(lang, options = {}) {
  if (!content[lang]) return;
  if (!options.force && currentLanguage === lang) return;
  currentLanguage = lang;
  const dict = content[lang];
  writeStoredLanguage(lang);
  setTextContent(lang);
  renderDynamicContent(lang);
  setupImageFallbacks();
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  const subject = document.querySelector('[data-rfq-form] [name="_subject"]');
  if (subject) subject.value = dict.form.subject;
  document.dispatchEvent(new CustomEvent("jinyi:languagechange", { detail: { lang } }));
  document.querySelector("[data-lightbox-close]")?.setAttribute("aria-label", dict.lightbox.close);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const lightbox = document.querySelector(".image-lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("figcaption");
const lightboxClose = document.querySelector("[data-lightbox-close]");

function lightboxSource(image) {
  const raw = image.dataset.full || image.currentSrc || image.getAttribute("src") || image.src;
  if (!raw) return "";
  return new URL(raw, window.location.href).href;
}

function openLightbox(image) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  const figure = image.closest("figure");
  const caption = figure?.querySelector("figcaption")?.textContent?.trim() || image.alt || "";
  const source = lightboxSource(image);
  if (!source) return;

  lightbox.classList.add("is-loading");
  lightbox.classList.remove("has-error");
  lightboxImage.onload = () => {
    lightbox.classList.remove("is-loading");
    lightbox.classList.remove("has-error");
  };
  lightboxImage.onerror = () => {
    lightbox.classList.remove("is-loading");
    lightbox.classList.add("has-error");
    lightboxCaption.textContent = "Image could not be loaded. Please try opening it again.";
  };
  lightboxImage.removeAttribute("width");
  lightboxImage.removeAttribute("height");
  lightboxImage.src = source;
  lightboxImage.alt = image.alt || caption;
  lightboxCaption.textContent = caption;
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.hidden = true;
  lightbox.classList.remove("is-loading", "has-error");
  lightboxImage.onload = null;
  lightboxImage.onerror = null;
  lightboxImage.removeAttribute("src");
  document.body.classList.remove("lightbox-open");
}

document.addEventListener("click", (event) => {
  const image = event.target.closest("main figure img");
  if (image) {
    event.preventDefault();
    openLightbox(image);
    return;
  }

  if (event.target === lightbox || event.target.closest("[data-lightbox-close]")) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});

// 【优化说明】首屏初始化只渲染一次，后续重复点击当前语言不会触发额外 DOM 更新。
setLanguage(getInitialLanguage(), { force: true });
