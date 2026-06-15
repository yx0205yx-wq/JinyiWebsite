const LANG_KEY = "jinyi-site-language";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdqkjbl";

const contact = {
  email: "dgjinyi888@163.com",
  whatsapp: "+86 13515525036",
  whatsappUrl: "https://wa.me/8613515525036",
  address:
    "Room 101, No.11, Xinwei East Seventh Lane, Shixia Village, Dalang Town, Dongguan City, China",
  addressZh: "广东省东莞市大朗镇石厦新围东七巷11号",
};

const sharedImages = {
  profileParts: "assets/company/profile-ground-inserts.jpg",
  moldSet: "assets/company/mold-components-set.jpg",
  roundPins: "assets/company/round-pin-components.jpg",
  ceramic: "assets/company/ceramic-component.jpg",
  plates: "assets/company/precision-plate-components.jpg",
  smallWire: "assets/real-photos/small-wire-cut-parts.jpg",
  tungsten: "assets/real-photos/tungsten-forming-parts.jpg",
  plastic: "assets/real-photos/plastic-mold-plates.jpg",
};

const equipmentImages = {
  pgWorkshop: "assets/equipment/pg-profile-grinding-workshop.jpg",
  pgMachine: "assets/equipment/pg-profile-grinding-machine.jpg",
  wireLine: "assets/equipment/wire-edm-line.jpg",
  wireMachine: "assets/equipment/wire-edm-machine.jpg",
  sodickEdm: "assets/equipment/sodick-mirror-edm.jpg",
  mitsuiGrinding: "assets/equipment/mitsui-grinding-machine.jpg",
  cncGrinding: "assets/equipment/cnc-form-grinding-area.jpg",
  opticalGrinding: "assets/equipment/optical-projection-grinding.jpg",
  partnerEquipment: "assets/equipment/partner-equipment-overview.jpg",
  workshop01: "assets/equipment/temperature-controlled-workshop-01.jpg",
  workshop02: "assets/equipment/temperature-controlled-workshop-02.jpg",
  workshop03: "assets/equipment/temperature-controlled-workshop-03.jpg",
  workshop04: "assets/equipment/temperature-controlled-workshop-04.jpg",
  workshop05: "assets/equipment/temperature-controlled-workshop-05.jpg",
  workshop06: "assets/equipment/temperature-controlled-workshop-06.jpg",
  inspectionRoom: "assets/equipment/inspection-room-overview.jpg",
  heightGauge: "assets/equipment/height-gauge.jpg",
  projector: "assets/equipment/projector-equipment.jpg",
  microscope: "assets/equipment/tool-microscope.jpg",
  roughnessTester: "assets/equipment/surface-roughness-tester.jpg",
  cmm: "assets/equipment/cmm-equipment.jpg",
};

const imageMeta = {
  "assets/real-photos/finished-mold-plates.jpg": [1279, 1706],
  "assets/real-photos/edm-workshop-line.jpg": [1440, 810],
  "assets/company/profile-ground-inserts.jpg": [904, 603],
  "assets/company/mold-components-set.jpg": [971, 649],
  "assets/company/round-pin-components.jpg": [575, 392],
  "assets/company/ceramic-component.jpg": [1144, 645],
  "assets/company/precision-plate-components.jpg": [1717, 1147],
  "assets/real-photos/small-wire-cut-parts.jpg": [600, 444],
  "assets/real-photos/tungsten-forming-parts.jpg": [600, 444],
  "assets/real-photos/plastic-mold-plates.jpg": [600, 444],
  "assets/equipment/pg-profile-grinding-workshop.jpg": [689, 339],
  "assets/equipment/pg-profile-grinding-machine.jpg": [499, 667],
  "assets/equipment/wire-edm-line.jpg": [745, 655],
  "assets/equipment/wire-edm-machine.jpg": [460, 497],
  "assets/equipment/sodick-mirror-edm.jpg": [1069, 626],
  "assets/equipment/mitsui-grinding-machine.jpg": [575, 754],
  "assets/equipment/cnc-form-grinding-area.jpg": [601, 367],
  "assets/equipment/optical-projection-grinding.jpg": [369, 435],
  "assets/equipment/partner-equipment-overview.jpg": [1090, 509],
  "assets/equipment/temperature-controlled-workshop-01.jpg": [1200, 900],
  "assets/equipment/temperature-controlled-workshop-02.jpg": [1200, 900],
  "assets/equipment/temperature-controlled-workshop-03.jpg": [1200, 900],
  "assets/equipment/temperature-controlled-workshop-04.jpg": [1447, 814],
  "assets/equipment/temperature-controlled-workshop-05.jpg": [800, 592],
  "assets/equipment/temperature-controlled-workshop-06.jpg": [1447, 814],
  "assets/equipment/inspection-room-overview.jpg": [1800, 1013],
  "assets/equipment/height-gauge.jpg": [370, 800],
  "assets/equipment/projector-equipment.jpg": [1080, 1440],
  "assets/equipment/tool-microscope.jpg": [1080, 1440],
  "assets/equipment/surface-roughness-tester.jpg": [670, 709],
  "assets/equipment/cmm-equipment.jpg": [514, 686],
};

const content = {
  zh: {
    metaTitle: "精密零部件定制加工 | 线切割与 PG 研磨 | 金一精密",
    company: {
      shortName: "金一精密科技",
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
      quote: "询价",
    },
    hero: {
      eyebrow: "精密零部件加工制造商",
      title: "精密零部件定制加工",
      lead:
        "聚焦高精度研磨、细线切割与镜面放电加工，服务电子连接器、精密组件及自动化零件客户。",
      primaryCta: "发送图纸询价",
      secondaryCta: "查看加工能力",
      photoMain: "精密板件与零部件",
      photoSide: "恒温 EDM 加工现场",
    },
    metrics: [
      ["20+ Years", "精密加工经验"],
      ["ISO9001", "质量体系认证"],
      ["24 Hours", "RFQ 快速响应"],
      ["0.001mm", "油线切割精度"],
    ],
    trust: [
      ["R0.03", "PG 成型研磨最小 R 角参考"],
      ["φ0.05-φ0.20", "油/水线切割线径范围"],
      ["Ra0.05-Ra0.15", "PG 研磨表面粗糙度"],
      ["AD30LS x4", "Sodick 镜面放电加工设备"],
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
        desc: "日本 WAIDA CNC 轮廓研磨设备，用于高精度异形刃口、冲头、镶件和超硬精密零部件。",
        meta: ["WAIDA PGX-2500SP x6", "公差 ±0.002mm", "Ra0.05-Ra0.15"],
      },
      {
        title: "油/水线切割",
        desc: "西部电机与 AgieCharmilles 线切割设备，支持细线、微小 R 角和高精度轮廓加工。",
        meta: ["线径 φ0.05-φ0.20", "水切 ±0.002mm", "油切 ±0.001mm"],
      },
      {
        title: "Sodick 镜面 EDM",
        desc: "Sodick AD30LS 用于微细放电、镜面放电及复杂微细部位加工。",
        meta: ["AD30LS x4", "Ra0.13-Ra0.4", "公差 ±0.005"],
      },
      {
        title: "研磨 / CNC / 板件",
        desc: "三井ハイテック、Okamoto 等研磨设备，配合机加工和协力资源对应板件与治具类零件。",
        meta: ["精密研削", "CNC 成形研磨", "板件 500 x 350 x 70mm"],
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
      title: "完整设备明细与加工参数",
      body:
        "按公司设备介绍完整整理设备型号、数量、加工尺寸与备注，便于采购和工程人员逐项核对。",
      imageOne: "GF / AgieCharmilles wire EDM line",
      imageTwo: "Okamoto GRIND-X precision grinding",
      galleryEyebrow: "Equipment Gallery",
      galleryTitle: "设备图片展示",
      galleryBody: "按加工工艺、现场环境与检测场景整理主要设备图片，便于快速了解实际配置。",
    },
    equipmentColumns: ["NO", "机械设备", "数量", "尺寸", "备注"],
    equipmentRows: [
      ["1", "WAIDA 轮廓研磨机 PGX-2500SP", "6 台", "100mm x 100mm x 150mm", "最小 R0.03，公差 ±0.002mm"],
      ["2", "西部电机线切割加工机 MP250S", "1 台", "250mm x 180mm x 80mm", "线径 φ0.2，最小 R0.12，公差 ±0.002mm"],
      ["3", "西部电机线切割加工机 M50A", "5 台", "500mm x 300mm x 80mm", "线径 φ0.1-φ0.2，最小 R0.065，公差 ±0.002mm"],
      ["4", "西部电机线切割加工机 MM50A", "1 台", "500mm x 300mm x 80mm", "线径 φ0.07-φ0.2，最小 R0.05，公差 ±0.002mm"],
      ["5", "西部线切割机 M50B", "1 台", "500mm x 350mm x 80mm", "线径 φ0.1-φ0.2，最小 R0.065，公差 ±0.002mm"],
      ["6", "西部电机油线切割加工机 M25LP", "1 台", "250mm x 250mm x 80mm", "线径 φ0.05-φ0.2，最小 R0.035，公差 ±0.002mm"],
      ["7", "Agie 油线切割 CUT 2000 OilTech", "2 台", "350mm x 250mm x 80mm", "线径 φ0.2，最小 R0.12，公差 ±0.001mm"],
      ["8", "CASTEK 细孔打孔机", "2 台", "300mm x 200mm x 230mm", "细穴 φ0.3-φ3.0"],
      ["9", "Sodick 镜面放电加工机 AD30LS", "4 台", "320mm x 200mm x 230mm", "钢材 Ra0.13，超硬 Ra0.4，公差 ±0.005"],
      ["10", "大友 5S/3S 铣床", "2 台", "900mm x 300mm x 400mm", ""],
      ["11", "CTEK 成型放电加工机 320", "1 台", "300mm x 200mm x 230mm", "粗放电，公差 ±0.01"],
      ["12", "CREATOR 成型放电加工机 -2", "3 台", "350mm x 300mm x 260mm", "粗放电，公差 ±0.01"],
      ["13", "CREATOR 成型放电加工机 CR-5C", "1 台", "300mm x 300mm x 260mm", "粗放电，公差 ±0.01"],
      ["14", "FANUC 加工中心 α-D21MiA", "1 台", "500mm x 400mm x 330mm", "公差 ±0.01"],
      ["15", "三井高科技研磨机 MSG-200MH", "6 台", "350mm x 150mm x 180mm", "公差 ±0.002"],
      ["16", "三井高科技 CNC 研磨机 MSG-460NC", "1 台", "75mm x 150mm x 50mm", "可镜面加工，公差 ±0.002"],
      ["17", "大同研磨盘 TSG-350", "6 台", "300mm x 150mm x 170mm", "公差 ±0.002"],
      ["18", "JOENLIH 研磨盘", "4 台", "300mm x 150mm x 170mm", "公差 ±0.002"],
      ["19", "TALIANG CNC 绘图机", "1 台", "200mm x 160mm", "制作轮廓研磨用胶片"],
      ["20", "激光刻印机", "1 台", "", ""],
      ["21", "三井治具研磨盘 4GDN", "1 台", "610mm x 410mm x 135mm", "公差 ±0.001"],
      ["22", "三井治具研磨盘 300G", "1 台", "500mm x 300mm x 95mm", "公差 ±0.001"],
    ],
    equipmentGallery: [
      ["PG 成型研磨", "WAIDA PG 加工现场", "CNC profile grinding 设备用于高精度异形刃口、冲头与超硬零件。", equipmentImages.pgWorkshop],
      ["PG 成型研磨", "PGX-2500SP 设备细节", "用于 profile 轮廓研磨与微小形状加工。", equipmentImages.pgMachine],
      ["线切割 EDM", "西部电机线切割设备组", "支持细线、微小 R 角和高精度轮廓切割。", equipmentImages.wireLine],
      ["线切割 EDM", "油/水线切割单机", "用于精密轮廓、窄槽与微细孔位相关加工。", equipmentImages.wireMachine],
      ["镜面 EDM", "Sodick 镜面放电加工机", "对应微细放电、镜面放电与复杂型腔加工。", equipmentImages.sodickEdm],
      ["精密研削", "三井ハイテック研削设备", "用于平面、成形与高稳定性精密研削。", equipmentImages.mitsuiGrinding],
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
      ["检测设备", "三次元测量设备", "用于板件孔位、孔距和空间尺寸检测。", equipmentImages.cmm],
    ],
    quality: {
      eyebrow: "Quality Assurance",
      title: "恒温加工与检测，支撑可验证的尺寸稳定性",
      body:
        "通过恒温加工环境、标准化检测方法与 ISO9001:2015 质量认证，提升精密零部件尺寸稳定性。",
    },
    qualityCards: [
      ["22°C ±0.5°C 恒温管理", "加工设备设置于恒温室，尽量降低室温变化导致的机械变动，支撑绝对位置精度。"],
      ["ISO9001:2015", "在尺寸测量、精密零部件制造、塑胶成形相关领域建立质量管理体系。"],
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
      ["钨钢成形零件", "钨钢成形研磨与高耐磨部件。", sharedImages.tungsten],
      ["树脂成形相关零件", "塑胶成形 core / cavity 与相关零件。", sharedImages.plastic],
    ],
    blade: {
      eyebrow: "Micro Blade Capability",
      title: "可制作刃口最小尺寸与刃长范围",
    },
    bladeRows: [
      ["0.14-0.20mm", "10mm 以内"],
      ["0.20-0.30mm", "15mm 以内"],
      ["0.30-0.50mm", "18mm 以内"],
      ["0.50-1.00mm", "20mm 以内"],
      ["1.00mm 以上", "30mm 以内"],
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
      ["陶瓷材料", ["ZKA-901", "NPZ-28", "NPZ-1"]],
      ["涂层与替代材", ["PVD / TiAlN", "DLC 0.5μ 以下", "台湾材、中国材可选"]],
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
        desc: "Material: Tungsten Carbide | Tolerance: ±0.002mm | Market: Japan",
        points: ["Challenge: 超硬冲头刃口细小，尺寸与形状稳定性要求高。", "Solution: 采用 PG 成型研磨配合投影检测确认刃口轮廓。", "Result: 达成 ±0.002mm 关键尺寸要求，支持客户样件确认。"],
      },
      {
        tag: "Electronics / Ceramic Pin",
        title: "精密陶瓷定位针",
        desc: "Material: Precision Ceramic | Market: Electronics Industry",
        points: ["Challenge: 客户需要绝缘、耐磨并保持稳定定位的细小陶瓷零件。", "Solution: 根据图纸确认接触面、边缘处理和检测基准，安排精密研磨加工。", "Result: 提供适合电子制造治具使用的稳定陶瓷定位部件。"],
      },
      {
        tag: "Precision Mold / Wire EDM Insert",
        title: "线切割精密模具镶件",
        desc: "Process: Wire EDM | Market: Precision Mold Industry",
        points: ["Challenge: 模具镶件存在复杂轮廓、小 R 角和孔位要求。", "Solution: 评估线径、切割路径、基准和检测方式后进行线切割加工。", "Result: 帮助客户获得可装配、可复验的模具镶件。"],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "采购与工程团队常见问题",
      body: "提前确认图纸、材料、数量、公差和交期信息，可以让我们更快完成加工评估和报价。",
    },
    faqItems: [
      ["What file formats do you accept?", "We accept PDF, STEP, STP, DWG and DXF files for RFQ review. 2D drawings with tolerances are preferred for final quotation."],
      ["What is your minimum order quantity?", "Prototype, small-batch and custom orders can be reviewed. MOQ depends on material, process route and inspection requirements."],
      ["What tolerance can you achieve?", "Typical tolerances depend on material and geometry. Our reference capabilities include oil wire EDM up to 0.001mm and PG grinding projects around ±0.002mm."],
      ["What is your lead time?", "Lead time depends on drawing complexity, material availability and quantity. RFQ responses are targeted within 24 hours after receiving complete drawings."],
      ["Can you sign NDA?", "Yes. We can sign NDA agreements for confidential drawings, tooling designs and customer projects."],
      ["Do you support overseas customers?", "Yes. Jinyi Precision has experience serving international customers across Japan, Southeast Asia, Europe, and North America."],
    ],
    blog: {
      eyebrow: "Technical Blog",
      title: "精密加工技术文章",
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
      "尼得科（东莞）",
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
      note: "提交 RFQ 表单后，请通过 Email 或 WhatsApp 发送 PDF、STEP、STP、DWG 或 DXF 图纸。",
      submit: "提交 RFQ",
      whatsappSubmit: "WhatsApp 询价",
      subject: "金一精密询价",
      bodyLabels: ["姓名 / 公司", "联系方式", "材料", "数量", "产品 / 工序", "关键公差 / 表面要求", "加工要求"],
      success: "已收到您的 RFQ 表单。请通过 Email 或 WhatsApp 继续发送图纸，我们会尽快回复。",
      error: "提交未成功，请检查 Formspree 设置，或直接通过邮件 / WhatsApp 联系我们。",
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
    metaTitle: "精密部品カスタム加工 | ワイヤーカット・PG研削 | 金一精密",
    company: {
      shortName: "金一精密科技",
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
      quote: "見積依頼",
    },
    hero: {
      eyebrow: "精密部品加工メーカー",
      title: "精密部品の高精度カスタム加工",
      lead:
        "高精度研削、細線ワイヤーカット、鏡面放電加工を軸に、コネクタ、精密部品、自動化部品向けの加工に対応します。",
      primaryCta: "図面で見積依頼",
      secondaryCta: "加工能力を見る",
      photoMain: "精密プレートと精密部品",
      photoSide: "恒温 EDM 加工現場",
    },
    metrics: [
      ["20+ Years", "精密加工経験"],
      ["ISO9001", "品質認証"],
      ["24 Hours", "RFQ 迅速対応"],
      ["0.001mm", "油ワイヤー精度"],
    ],
    trust: [
      ["R0.03", "PG 加工の最小 R 参考値"],
      ["φ0.05-φ0.20", "油 / 水ワイヤー線径範囲"],
      ["Ra0.05-Ra0.15", "PG 研削面粗度"],
      ["AD30LS x4", "Sodick 鏡面放電加工設備"],
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
        desc: "日本製 WAIDA CNC プロファイル研削盤により、高精度の異形刃先、パンチ、インサート、超硬精密部品を加工します。",
        meta: ["WAIDA PGX-2500SP x6", "公差 ±0.002mm", "Ra0.05-Ra0.15"],
      },
      {
        title: "油 / 水ワイヤーカット",
        desc: "西部電機および AgieCharmilles のワイヤーカット設備で、細線、微小 R、精密輪郭加工に対応します。",
        meta: ["線径 φ0.05-φ0.20", "水切 ±0.002mm", "油切 ±0.001mm"],
      },
      {
        title: "Sodick 鏡面放電",
        desc: "Sodick AD30LS により、微細放電、鏡面放電、複雑な微細形状の加工に対応します。",
        meta: ["AD30LS x4", "Ra0.13-Ra0.4", "公差 ±0.005"],
      },
      {
        title: "研削 / CNC / プレート",
        desc: "三井ハイテック、Okamoto などの研削設備と機械加工・協力工場により、プレートや治具部品にも対応します。",
        meta: ["精密研削", "CNC 成形研削", "プレート 500 x 350 x 70mm"],
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
      title: "設備明細と加工パラメータ",
      body:
        "設備型式、数量、対応サイズ、備考を一覧化し、購買・技術担当者が確認しやすい形で整理しています。",
      imageOne: "GF / AgieCharmilles ワイヤーカットライン",
      imageTwo: "Okamoto GRIND-X 精密研削",
      galleryEyebrow: "Equipment Gallery",
      galleryTitle: "設備写真ギャラリー",
      galleryBody: "加工工程、現場環境、検査シーンごとに主要設備写真を整理し、設備構成を分かりやすく示します。",
    },
    equipmentColumns: ["NO", "機械設備", "数量", "サイズ", "備考"],
    equipmentRows: [
      ["1", "WAIDA プロファイル研磨盤 PGX-2500SP", "6", "100mm x 100mm x 150mm", "最小 R0.03、公差 ±0.002mm"],
      ["2", "西部電機ワイヤカット加工機 MP250S", "1", "250mm x 180mm x 80mm", "線径 φ0.2、最小 R0.12、公差 ±0.002mm"],
      ["3", "西部電機ワイヤカット加工機 M50A", "5", "500mm x 300mm x 80mm", "線径 φ0.1-φ0.2、最小 R0.065、公差 ±0.002mm"],
      ["4", "西部電機ワイヤカット加工機 MM50A", "1", "500mm x 300mm x 80mm", "線径 φ0.07-φ0.2、最小 R0.05、公差 ±0.002mm"],
      ["5", "西部線切割機 M50B", "1", "500mm x 350mm x 80mm", "線径 φ0.1-φ0.2、最小 R0.065、公差 ±0.002mm"],
      ["6", "西部電機油ワイヤカット加工機 M25LP", "1", "250mm x 250mm x 80mm", "線径 φ0.05-φ0.2、最小 R0.035、公差 ±0.002mm"],
      ["7", "アジエ油ワイヤカット CUT 2000 OilTech", "2", "350mm x 250mm x 80mm", "線径 φ0.2、最小 R0.12、公差 ±0.001mm"],
      ["8", "CASTEK 細孔打孔機", "2", "300mm x 200mm x 230mm", "細穴 φ0.3-φ3.0"],
      ["9", "Sodick 鏡面放電加工機 AD30LS", "4", "320mm x 200mm x 230mm", "スチール類 Ra0.13、超硬 Ra0.4、公差 ±0.005"],
      ["10", "大友 5S/3S フライス", "2", "900mm x 300mm x 400mm", ""],
      ["11", "CTEK 型彫り放電加工機 320", "1", "300mm x 200mm x 230mm", "荒放電、公差 ±0.01"],
      ["12", "CREATOR 型彫り放電加工機 -2", "3", "350mm x 300mm x 260mm", "荒放電、公差 ±0.01"],
      ["13", "CREATOR 型彫り放電加工機 CR-5C", "1", "300mm x 300mm x 260mm", "荒放電、公差 ±0.01"],
      ["14", "FANUC マシニングセンター α-D21MiA", "1", "500mm x 400mm x 330mm", "公差 ±0.01"],
      ["15", "三井ハイテック研削盤 MSG-200MH", "6", "350mm x 150mm x 180mm", "公差 ±0.002"],
      ["16", "三井ハイテック CNC 研削盤 MSG-460NC", "1", "75mm x 150mm x 50mm", "鏡面加工可能、公差 ±0.002"],
      ["17", "大同研磨盤 TSG-350", "6", "300mm x 150mm x 170mm", "公差 ±0.002"],
      ["18", "JOENLIH 研磨盤", "4", "300mm x 150mm x 170mm", "公差 ±0.002"],
      ["19", "TALIANG CNC 絵図機", "1", "200mm x 160mm", "プロファイル研磨用フィルム作成"],
      ["20", "レーザ刻印機", "1", "", ""],
      ["21", "三井治具研磨盤 4GDN", "1", "610mm x 410mm x 135mm", "公差 ±0.001"],
      ["22", "三井治具研磨盤 300G", "1", "500mm x 300mm x 95mm", "公差 ±0.001"],
    ],
    equipmentGallery: [
      ["PG 研削", "WAIDA PG 加工現場", "CNC プロファイル研削設備により、高精度の異形刃先、パンチ、超硬部品に対応します。", equipmentImages.pgWorkshop],
      ["PG 研削", "PGX-2500SP 設備詳細", "プロファイル輪郭研削と微細形状加工に使用します。", equipmentImages.pgMachine],
      ["ワイヤーカット", "西部電機ワイヤーカット設備群", "細線、微小 R、高精度輪郭加工に対応します。", equipmentImages.wireLine],
      ["ワイヤーカット", "油 / 水ワイヤーカット単機", "精密輪郭、狭溝、微細穴位置関連の加工に使用します。", equipmentImages.wireMachine],
      ["鏡面 EDM", "Sodick 鏡面放電加工機", "微細放電、鏡面放電、複雑な型部位加工に対応します。", equipmentImages.sodickEdm],
      ["精密研削", "三井ハイテック研削設備", "平面、成形、高安定性が必要な精密研削に対応します。", equipmentImages.mitsuiGrinding],
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
      ["検査設備", "三次元測定設備", "プレート穴位置、穴ピッチ、空間寸法の検査に使用します。", equipmentImages.cmm],
    ],
    quality: {
      eyebrow: "Quality Assurance",
      title: "恒温加工と恒温検査で、検証可能な寸法安定性を支えます",
      body:
        "恒温加工環境、標準化された検査方法、ISO9001:2015 品質認証により、精密部品の寸法安定性を支えます。",
    },
    qualityCards: [
      ["22°C ±0.5°C 恒温管理", "加工設備を恒温室に設置し、室温による機械変動を抑え、絶対位置精度の安定を目指します。"],
      ["ISO9001:2015", "寸法測定、精密部品製造、プラスチック成形関連分野で品質マネジメント体制を整備しています。"],
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
      ["超硬成形部品", "超硬成形研削、高耐摩耗部品。", sharedImages.tungsten],
      ["樹脂成形関連部品", "プラスチック成形 core / cavity 関連部品。", sharedImages.plastic],
    ],
    blade: {
      eyebrow: "Micro Blade Capability",
      title: "製作可能な最小刃幅と刃長範囲",
    },
    bladeRows: [
      ["0.14-0.20mm", "10mm 以内"],
      ["0.20-0.30mm", "15mm 以内"],
      ["0.30-0.50mm", "18mm 以内"],
      ["0.50-1.00mm", "20mm 以内"],
      ["1.00mm 以上", "30mm 以内"],
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
      ["セラミック材", ["ZKA-901", "NPZ-28", "NPZ-1"]],
      ["コーティング・代替材", ["PVD / TiAlN", "DLC 0.5μ 以下", "台湾材・中国材対応"]],
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
        desc: "Material: Tungsten Carbide | Tolerance: ±0.002mm | Market: Japan",
        points: ["Challenge: 超硬パンチの微細刃先に高い寸法安定性が要求されました。", "Solution: PG プロファイル研削と投影検査で刃先形状を確認しました。", "Result: ±0.002mm の重要寸法要求に対応し、お客様の試作確認を支援しました。"],
      },
      {
        tag: "Electronics / Ceramic Pin",
        title: "精密セラミック位置決めピン",
        desc: "Material: Precision Ceramic | Market: Electronics Industry",
        points: ["Challenge: 絶縁性、耐摩耗性、安定した位置決めが必要でした。", "Solution: 接触面、エッジ処理、測定基準を確認して精密研削工程を設定しました。", "Result: 電子製造治具に適した安定したセラミック部品を提供しました。"],
      },
      {
        tag: "Precision Mold / Wire EDM Insert",
        title: "ワイヤーカット金型インサート",
        desc: "Process: Wire EDM | Market: Precision Mold Industry",
        points: ["Challenge: 複雑輪郭、小 R、穴位置が重要な金型インサートでした。", "Solution: 線径、切断経路、基準、検査方法を確認して加工しました。", "Result: 組付け可能で検証しやすい金型インサートを提供しました。"],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "購買・技術担当者からのよくある質問",
      body: "図面、材料、数量、公差、納期を事前に共有いただくことで、加工可否と見積をより早く確認できます。",
    },
    faqItems: [
      ["What file formats do you accept?", "PDF、STEP、STP、DWG、DXF を受け付けています。正式見積には公差入り 2D 図面が最も有効です。"],
      ["What is your minimum order quantity?", "試作、小ロット、カスタム品を評価できます。MOQ は材料、工程、検査要求により異なります。"],
      ["What tolerance can you achieve?", "公差は材料と形状により異なります。参考として油ワイヤー EDM は 0.001mm、PG 研削は ±0.002mm レベルの案件に対応します。"],
      ["What is your lead time?", "納期は図面難易度、材料、数量により異なります。図面情報が揃っていれば 24 時間以内の RFQ 回答を目標にしています。"],
      ["Can you sign NDA?", "はい。機密図面、金型設計、顧客プロジェクトに関する NDA 締結に対応できます。"],
      ["Do you support overseas customers?", "はい。Jinyi Precision は日本、東南アジア、欧州、北米のお客様への対応経験があります。"],
    ],
    blog: {
      eyebrow: "Technical Blog",
      title: "精密加工に関する技術記事",
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
      "ニデック（東莞）",
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
      note: "RFQ フォーム送信後、PDF、STEP、STP、DWG、DXF 図面を Email または WhatsApp でお送りください。",
      submit: "RFQ を送信",
      whatsappSubmit: "WhatsApp で相談",
      subject: "金一精密 見積依頼",
      bodyLabels: ["お名前 / 会社名", "連絡先", "材料", "数量", "製品 / 工程", "重要公差 / 面要求", "加工要求"],
      success: "RFQ フォームを受け付けました。図面は Email または WhatsApp で続けてお送りください。確認後、早急に返信します。",
      error: "送信できませんでした。Formspree 設定をご確認いただくか、メール / WhatsApp でご連絡ください。",
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
    metaTitle: "Precision Component Machining | Wire EDM & PG Grinding | Jinyi Precision",
    company: {
      shortName: "Jinyi Precision Technology",
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
      quote: "RFQ",
    },
    hero: {
      eyebrow: "Precision Components Manufacturer",
      title: "Custom Machining for Precision Components",
      lead:
        "Focused on high-precision grinding, fine wire EDM and mirror EDM for connector, precision component and automation customers.",
      primaryCta: "Send Drawings",
      secondaryCta: "View Capability",
      photoMain: "Precision plates and components",
      photoSide: "Temperature-controlled EDM workshop",
    },
    metrics: [
      ["20+ Years", "Precision machining experience"],
      ["ISO9001", "Certified quality system"],
      ["24 Hours", "RFQ response"],
      ["0.001mm", "Oil wire EDM precision"],
    ],
    trust: [
      ["R0.03", "Reference minimum R for PG grinding"],
      ["φ0.05-φ0.20", "Oil / water wire EDM diameter"],
      ["Ra0.05-Ra0.15", "PG grinding surface roughness"],
      ["AD30LS x4", "Sodick mirror EDM equipment"],
    ],
    about: {
      eyebrow: "Company Profile",
      title: "A manufacturing system built around accuracy, delivery and stable quality",
      body:
        "Jinyi Precision focuses on custom precision component machining, especially carbide parts, precision metal components for electronic parts, profile grinding and fine wire EDM. The company values communication with domestic and overseas customers and responds with quality-first and short-lead-time support.",
    },
    strengths: [
      ["Carbide and electronics experience", "Strong in precision metal components for electronic parts, with carbide, steel and ceramic material support for connectors, precision stamping and automation parts."],
      ["Accuracy and surface finish focus", "Processing environment, equipment selection and measurement methods are built around dimensional stability, surface roughness and verifiable data."],
      ["Profile grinding process judgement", "Profile grinding experience supports more reliable process planning for complex forms, micro blade features and carbide components."],
      ["Coating support", "PVD, TiAlN, DLC, HA and UPC coating options can be selected according to life, friction and film-thickness requirements."],
      ["Japanese materials and alternatives", "Besides Japanese materials, Taiwan and China alternatives can be selected according to quality and cost targets, with Jinyi responsible for quality assurance."],
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
        desc: "Japanese WAIDA CNC profile grinding for high-precision formed edges, punches, inserts and carbide precision components.",
        meta: ["WAIDA PGX-2500SP x6", "Tolerance ±0.002mm", "Ra0.05-Ra0.15"],
      },
      {
        title: "Oil / Water Wire EDM",
        desc: "Seibu and AgieCharmilles wire EDM equipment supports fine wire, small R corners and high-precision contour processing.",
        meta: ["Wire φ0.05-φ0.20", "Water wire ±0.002mm", "Oil wire ±0.001mm"],
      },
      {
        title: "Sodick Mirror EDM",
        desc: "Sodick AD30LS machines support fine EDM, mirror EDM and complex micro-feature processing.",
        meta: ["AD30LS x4", "Ra0.13-Ra0.4", "Tolerance ±0.005"],
      },
      {
        title: "Grinding / CNC / Plates",
        desc: "Mitsui High-tec, Okamoto and other grinding equipment, combined with machining and partner resources, support plates and fixture parts.",
        meta: ["Precision grinding", "CNC form grinding", "Plates 500 x 350 x 70mm"],
      },
    ],
    services: {
      eyebrow: "Core Services",
      title: "Precision machining pages for international B2B buyers",
      body: "Service pages are organized by process and part type so purchasing, engineering and quality teams can quickly review scope, materials and RFQ requirements.",
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
      title: "Complete Equipment List and Processing Parameters",
      body:
        "Equipment models, quantities, working sizes and notes are organized for quick engineering and purchasing review.",
      imageOne: "GF / AgieCharmilles wire EDM line",
      imageTwo: "Okamoto GRIND-X precision grinding",
      galleryEyebrow: "Equipment Gallery",
      galleryTitle: "Equipment Photo Gallery",
      galleryBody: "Key equipment photos are organized by process, workshop environment and inspection scenario for quick review.",
    },
    equipmentColumns: ["NO", "Equipment", "Qty.", "Working Size", "Notes"],
    equipmentRows: [
      ["1", "WAIDA profile grinding machine PGX-2500SP", "6", "100mm x 100mm x 150mm", "Min. R0.03, tolerance ±0.002mm"],
      ["2", "Seibu Electric wire EDM MP250S", "1", "250mm x 180mm x 80mm", "Wire φ0.2, min. R0.12, tolerance ±0.002mm"],
      ["3", "Seibu Electric wire EDM M50A", "5", "500mm x 300mm x 80mm", "Wire φ0.1-φ0.2, min. R0.065, tolerance ±0.002mm"],
      ["4", "Seibu Electric wire EDM MM50A", "1", "500mm x 300mm x 80mm", "Wire φ0.07-φ0.2, min. R0.05, tolerance ±0.002mm"],
      ["5", "Seibu wire-cut machine M50B", "1", "500mm x 350mm x 80mm", "Wire φ0.1-φ0.2, min. R0.065, tolerance ±0.002mm"],
      ["6", "Seibu Electric oil wire EDM M25LP", "1", "250mm x 250mm x 80mm", "Wire φ0.05-φ0.2, min. R0.035, tolerance ±0.002mm"],
      ["7", "Agie oil wire EDM CUT 2000 OilTech", "2", "350mm x 250mm x 80mm", "Wire φ0.2, min. R0.12, tolerance ±0.001mm"],
      ["8", "CASTEK small-hole drilling machine", "2", "300mm x 200mm x 230mm", "Small holes φ0.3-φ3.0"],
      ["9", "Sodick mirror EDM AD30LS", "4", "320mm x 200mm x 230mm", "Steel Ra0.13, carbide Ra0.4, tolerance ±0.005"],
      ["10", "Ohtomo 5S/3S milling machine", "2", "900mm x 300mm x 400mm", ""],
      ["11", "CTEK die-sinking EDM 320", "1", "300mm x 200mm x 230mm", "Rough EDM, tolerance ±0.01"],
      ["12", "CREATOR die-sinking EDM -2", "3", "350mm x 300mm x 260mm", "Rough EDM, tolerance ±0.01"],
      ["13", "CREATOR die-sinking EDM CR-5C", "1", "300mm x 300mm x 260mm", "Rough EDM, tolerance ±0.01"],
      ["14", "FANUC machining center α-D21MiA", "1", "500mm x 400mm x 330mm", "Tolerance ±0.01"],
      ["15", "Mitsui High-tec grinder MSG-200MH", "6", "350mm x 150mm x 180mm", "Tolerance ±0.002"],
      ["16", "Mitsui High-tec CNC grinder MSG-460NC", "1", "75mm x 150mm x 50mm", "Mirror finishing available, tolerance ±0.002"],
      ["17", "Daido grinder TSG-350", "6", "300mm x 150mm x 170mm", "Tolerance ±0.002"],
      ["18", "JOENLIH grinder", "4", "300mm x 150mm x 170mm", "Tolerance ±0.002"],
      ["19", "TALIANG CNC plotting machine", "1", "200mm x 160mm", "Profile grinding film preparation"],
      ["20", "Laser marking machine", "1", "", ""],
      ["21", "Mitsui jig grinder 4GDN", "1", "610mm x 410mm x 135mm", "Tolerance ±0.001"],
      ["22", "Mitsui jig grinder 300G", "1", "500mm x 300mm x 95mm", "Tolerance ±0.001"],
    ],
    equipmentGallery: [
      ["PG Grinding", "WAIDA PG workshop", "CNC profile grinding equipment supports formed edges, punches and carbide precision components.", equipmentImages.pgWorkshop],
      ["PG Grinding", "PGX-2500SP machine detail", "Used for profile contour grinding and micro formed features.", equipmentImages.pgMachine],
      ["Wire EDM", "Seibu wire EDM equipment line", "Supports fine wire, small R corners and high-precision contour cutting.", equipmentImages.wireLine],
      ["Wire EDM", "Oil / water wire EDM machine", "Used for precision contours, narrow slots and micro feature processing.", equipmentImages.wireMachine],
      ["Mirror EDM", "Sodick mirror EDM machine", "Supports fine EDM, mirror EDM and complex micro-feature processing.", equipmentImages.sodickEdm],
      ["Precision Grinding", "Mitsui High-tec grinding equipment", "Used for flat grinding, form grinding and stable precision finishing.", equipmentImages.mitsuiGrinding],
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
      ["Inspection Equipment", "Tool microscope", "Used for hole profile, fine contour and local feature inspection.", equipmentImages.microscope],
      ["Inspection Equipment", "Surface roughness tester", "Used for surface roughness confirmation and surface condition evaluation.", equipmentImages.roughnessTester],
      ["Inspection Equipment", "CMM equipment", "Used for plate hole position, pitch and spatial dimension inspection.", equipmentImages.cmm],
    ],
    quality: {
      eyebrow: "Quality Assurance",
      title: "Temperature-controlled processing and inspection for verifiable stability",
      body:
        "Temperature-controlled processing, standardized inspection methods and ISO9001:2015 certification support dimensional stability for precision components.",
    },
    qualityCards: [
      ["22°C ±0.5°C control", "Processing equipment is installed in a temperature-controlled room to reduce machine variation caused by room temperature changes."],
      ["ISO9001:2015", "A quality management system is established for dimensional measurement, precision component manufacturing and plastic molding related fields."],
      ["Inspection by feature", "Outer diameter, hole profile, hole pitch, squareness, blade shape and surface roughness each have defined measurement methods."],
    ],
    inspections: [
      ["Outer diameter / height", "TRIMOS height gauge, Nikon height gauge"],
      ["Hole profile / blade shape", "Tool microscope, 50x projector, precision micrometer"],
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
      ["Carbide Forming Parts", "Carbide form grinding and high-wear-resistance components.", sharedImages.tungsten],
      ["Resin-Molding Related Parts", "Plastic molding core / cavity and related components.", sharedImages.plastic],
    ],
    blade: {
      eyebrow: "Micro Blade Capability",
      title: "Minimum blade size and blade length range",
    },
    bladeRows: [
      ["0.14-0.20mm", "Within 10mm"],
      ["0.20-0.30mm", "Within 15mm"],
      ["0.30-0.50mm", "Within 18mm"],
      ["0.50-1.00mm", "Within 20mm"],
      ["Over 1.00mm", "Within 30mm"],
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
      ["Ceramics", ["ZKA-901", "NPZ-28", "NPZ-1"]],
      ["Coatings & Alternatives", ["PVD / TiAlN", "DLC below 0.5μ", "Taiwan and China materials available"]],
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
        desc: "Material: Tungsten Carbide | Tolerance: ±0.002mm | Market: Japan",
        points: ["Challenge: The carbide punch required a fine cutting edge with stable dimensional control.", "Solution: PG profile grinding and optical projection inspection were used to control the critical profile.", "Result: The project achieved the ±0.002mm critical tolerance target for customer sample approval."],
      },
      {
        tag: "Electronics / Ceramic Pin",
        title: "Precision Ceramic Pin",
        desc: "Material: Precision Ceramic | Market: Electronics Industry",
        points: ["Challenge: The customer needed insulation, wear resistance and stable positioning in a small ceramic component.", "Solution: Contact surfaces, edge condition and inspection datums were confirmed before precision grinding.", "Result: Jinyi supplied a stable ceramic locating component suitable for electronic manufacturing fixtures."],
      },
      {
        tag: "Precision Mold / Wire EDM Insert",
        title: "Wire EDM Mold Insert",
        desc: "Process: Wire EDM | Market: Precision Mold Industry",
        points: ["Challenge: The mold insert had complex contours, small R corners and critical hole-position requirements.", "Solution: Wire diameter, cutting path, datum reference and inspection method were reviewed before machining.", "Result: The customer received a mold insert that was ready for assembly and dimensional verification."],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Questions from purchasing and engineering teams",
      body: "Sharing drawings, material, quantity, tolerance and delivery requirements helps us evaluate manufacturability and quotation faster.",
    },
    faqItems: [
      ["What file formats do you accept?", "Please send PDF, STEP, STP, DWG or DXF files. For final quotation, 2D drawings with tolerances and inspection datums are preferred."],
      ["What is your minimum order quantity?", "Prototype, small-batch and custom orders can be reviewed. MOQ depends on material, process route and inspection requirements."],
      ["What tolerance can you achieve?", "Tolerance depends on part geometry and material. Reference capabilities include oil wire EDM up to 0.001mm and PG grinding around ±0.002mm."],
      ["What is your lead time?", "Lead time depends on complexity, material and quantity. We target a 24-hour RFQ response after receiving complete drawings."],
      ["Can you sign NDA?", "Yes. We can sign NDA agreements for confidential drawings, mold designs and customer projects."],
      ["Do you support overseas customers?", "Yes. Jinyi Precision has experience serving international customers across Japan, Southeast Asia, Europe, and North America."],
    ],
    blog: {
      eyebrow: "Technical Blog",
      title: "Precision machining articles for industrial buyers",
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
      "Nidec (Dongguan)",
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
      note: "Please send PDF, STEP, STP, DWG or DXF drawings by Email or WhatsApp after submitting the RFQ form.",
      submit: "Submit RFQ",
      whatsappSubmit: "RFQ by WhatsApp",
      subject: "Jinyi Precision RFQ",
      bodyLabels: ["Name / Company", "Contact", "Material", "Quantity", "Product / Process", "Key Tolerance / Surface Requirement", "Processing Requirements"],
      success: "Thank you. Your RFQ form has been submitted. Please send drawings by Email or WhatsApp, and we will reply as soon as possible.",
      error: "Submission failed. Please check the Formspree setup or contact us by email / WhatsApp.",
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
  blade: document.querySelector("#blade-table"),
  materials: document.querySelector("#material-grid"),
  caseStudies: document.querySelector("#case-study-grid"),
  customers: document.querySelector("#customer-list"),
  faq: document.querySelector("#faq-list"),
  blog: document.querySelector("#blog-grid"),
};

function getInitialLanguage() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && content[saved]) return saved;
  return "en";
}

function setTextContent(lang) {
  const dict = content[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.title = dict.metaTitle;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = node.dataset.i18n.split(".").reduce((obj, key) => obj?.[key], dict);
    if (typeof value === "string") node.textContent = value;
  });
}

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function imageAttrs(src, alt) {
  const [width, height] = imageMeta[src] || [800, 600];
  return `src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" width="${width}" height="${height}" loading="lazy" decoding="async"`;
}

function renderList(container, items, renderer) {
  if (!container) return;
  container.innerHTML = items.map(renderer).join("");
}

function renderDynamicContent(lang) {
  const dict = content[lang];

  renderList(
    selectors.metrics,
    dict.metrics,
    ([value, label]) => `<div class="metric"><dt>${label}</dt><dd>${value}</dd></div>`,
  );

  renderList(
    selectors.trust,
    dict.trust,
    ([value, label]) => `<div class="trust-item"><strong>${value}</strong><span>${label}</span></div>`,
  );

  renderList(
    selectors.strengths,
    dict.strengths,
    ([title, desc], index) => `
      <article class="strength-card">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${title}</h3>
        <p>${desc}</p>
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
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        <div class="capability-meta">
          ${item.meta.map((meta) => `<span>${meta}</span>`).join("")}
        </div>
      </article>
    `,
  );

  renderList(
    selectors.services,
    dict.serviceLinks,
    ([title, desc, href], index) => `
      <a class="service-link-card" href="${href}">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${title}</h3>
        <p>${desc}</p>
        <strong>${lang === "en" ? "View Service" : lang === "ja" ? "詳しく見る" : "查看详情"}</strong>
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
              <div ${index === 0 ? "" : `data-label="${dict.equipmentColumns[cellIndex]}"`}>
                ${
                  index === 0 || cellIndex < 3
                    ? `<strong>${cell || "-"}</strong>`
                    : `<span>${cell || "-"}</span>`
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
            <span>${category}</span>
            <h3>${title}</h3>
            <p>${desc}</p>
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
        <h3>${title}</h3>
        <p>${desc}</p>
      </article>
    `,
  );

  renderList(
    selectors.inspections,
    dict.inspections,
    ([title, desc]) => `
      <article class="inspection-card">
        <h3>${title}</h3>
        <p>${desc}</p>
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
          <h3>${title}</h3>
          <p>${desc}</p>
        </div>
      </article>
    `,
  );

  renderList(
    selectors.blade,
    dict.bladeRows,
    ([size, length]) => `
      <div class="blade-row">
        <strong>${size}</strong>
        <span>${length}</span>
      </div>
    `,
  );

  renderList(
    selectors.materials,
    dict.materialCards,
    ([title, rows]) => `
      <article class="material-card">
        <h3>${title}</h3>
        <ul>
          ${rows.map((row) => `<li>${row}</li>`).join("")}
        </ul>
      </article>
    `,
  );

  renderList(
    selectors.caseStudies,
    dict.caseStudyCards,
    (item) => `
      <article class="case-study-card">
        <span>${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <ul>
          ${item.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </article>
    `,
  );

  renderList(
    selectors.customers,
    dict.customersList,
    (name) => `<div class="customer-card">${name}</div>`,
  );

  renderList(
    selectors.faq,
    dict.faqItems,
    ([question, answer]) => `
      <details class="faq-item">
        <summary>${question}</summary>
        <p>${answer}</p>
      </details>
    `,
  );

  renderList(
    selectors.blog,
    dict.blogCards,
    ([title, desc, href]) => `
      <a class="blog-card" href="${href}">
        <span>${lang === "en" ? "Article" : lang === "ja" ? "記事" : "文章"}</span>
        <h3>${title}</h3>
        <p>${desc}</p>
      </a>
    `,
  );
}

function setLanguage(lang) {
  if (!content[lang]) return;
  const dict = content[lang];
  localStorage.setItem(LANG_KEY, lang);
  setTextContent(lang);
  renderDynamicContent(lang);
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  document.querySelector(".menu-button")?.setAttribute(
    "aria-label",
    lang === "en" ? "Open navigation" : lang === "ja" ? "ナビゲーションを開く" : "打开导航",
  );
  document.querySelector("[data-lightbox-close]")?.setAttribute("aria-label", dict.lightbox.close);
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");

menuButton?.addEventListener("click", () => {
  const open = header.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
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

document.querySelector("[data-rfq-form]")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const lang = localStorage.getItem(LANG_KEY) || getInitialLanguage();
  const dict = content[lang];
  const form = event.currentTarget;
  const status = form.querySelector("[data-form-status]");
  const submitButton = form.querySelector('button[type="submit"]');
  const action = form.getAttribute("action") || FORMSPREE_ENDPOINT;

  if (action.includes("FORM_ID_NOT_CONFIGURED")) {
    if (status) {
      status.textContent = dict.form.configuring;
      status.dataset.state = "error";
    }
    return;
  }

  const formData = new FormData(form);
  formData.set("_subject", dict.form.subject);

  if (submitButton) submitButton.disabled = true;
  if (status) {
    status.textContent = "";
    status.dataset.state = "";
  }

  try {
    const response = await fetch(action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error(`Formspree responded with ${response.status}`);

    form.reset();
    if (status) {
      status.textContent = dict.form.success;
      status.dataset.state = "success";
    }
  } catch (error) {
    if (status) {
      status.textContent = dict.form.error;
      status.dataset.state = "error";
    }
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

setLanguage(getInitialLanguage());
