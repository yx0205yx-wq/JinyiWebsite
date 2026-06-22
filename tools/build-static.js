const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const files = [
  "index.html",
  "styles.css",
  "script.js",
  "lightbox.js",
  "robots.txt",
  "sitemap.xml",
  "404.html",
  "deployment-guide.md",
];

const directories = [
  "wire-edm-parts",
  "pg-grinding",
  "tungsten-carbide-parts",
  "ceramic-parts",
  "precision-mold-components",
  "blog",
];

const assetFiles = [
  "assets/jinyi-logo.png",
  "assets/company/profile-ground-inserts.jpg",
  "assets/company/mold-components-set.jpg",
  "assets/company/round-pin-components.jpg",
  "assets/company/ceramic-component.jpg",
  "assets/company/precision-plate-components.jpg",
  "assets/real-photos/pg-profile-ground-components.png",
  "assets/real-photos/finished-mold-plates.jpg",
  "assets/real-photos/edm-workshop-line.jpg",
  "assets/real-photos/edm-workshop-overview.jpg",
  "assets/real-photos/okamoto-grinding-machine.jpg",
  "assets/real-photos/small-wire-cut-parts.jpg",
  "assets/real-photos/tungsten-forming-parts.jpg",
  "assets/real-photos/plastic-mold-plates.jpg",
  "assets/equipment/pg-profile-grinding-workshop.jpg",
  "assets/equipment/pg-profile-grinding-machine.jpg",
  "assets/equipment/wire-edm-line.jpg",
  "assets/equipment/wire-edm-machine.jpg",
  "assets/equipment/sodick-mirror-edm.jpg",
  "assets/equipment/mitsui-grinding-machine.jpg",
  "assets/equipment/cnc-form-grinding-area.jpg",
  "assets/equipment/optical-projection-grinding.jpg",
  "assets/equipment/partner-equipment-overview.jpg",
  "assets/equipment/temperature-controlled-workshop-01.jpg",
  "assets/equipment/temperature-controlled-workshop-02.jpg",
  "assets/equipment/temperature-controlled-workshop-03.jpg",
  "assets/equipment/temperature-controlled-workshop-04.jpg",
  "assets/equipment/temperature-controlled-workshop-05.jpg",
  "assets/equipment/temperature-controlled-workshop-06.jpg",
  "assets/equipment/inspection-room-overview.jpg",
  "assets/equipment/height-gauge.jpg",
  "assets/equipment/projector-equipment.jpg",
  "assets/equipment/tool-microscope.jpg",
  "assets/equipment/surface-roughness-tester.jpg",
  "assets/equipment/cmm-equipment.jpg",
];

function copyFile(relativePath) {
  const source = path.join(root, relativePath);
  const target = path.join(dist, relativePath);
  if (!fs.existsSync(source)) return;
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

function copyDirectory(relativePath) {
  const source = path.join(root, relativePath);
  const target = path.join(dist, relativePath);
  if (!fs.existsSync(source)) return;
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const childRelativePath = path.join(relativePath, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(childRelativePath);
    } else if (entry.isFile()) {
      copyFile(childRelativePath);
    }
  }
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

files.forEach(copyFile);
assetFiles.forEach(copyFile);
directories.forEach(copyDirectory);

console.log(`Production build created at ${dist}`);
