const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const files = [
  "index.html",
  "styles.css",
  "script.js",
  "lightbox.js",
  "site-ui.js",
  "robots.txt",
  "sitemap.xml",
  "404.html",
];

const directories = [
  "assets",
  "wire-edm-parts",
  "pg-grinding",
  "tungsten-carbide-parts",
  "ceramic-parts",
  "precision-mold-components",
  "blog",
];

const compressibleExtensions = new Set([".html", ".css", ".js", ".json", ".txt", ".xml", ".md"]);

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

function listDistFiles(relativeDirectory = "") {
  const directory = path.join(dist, relativeDirectory);
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) return listDistFiles(relativePath);
    return entry.isFile() ? [relativePath] : [];
  });
}

function compressFile(relativePath) {
  const target = path.join(dist, relativePath);
  if (!compressibleExtensions.has(path.extname(relativePath).toLowerCase())) return;

  const source = fs.readFileSync(target);
  if (source.length < 1024) return;

  fs.writeFileSync(`${target}.gz`, zlib.gzipSync(source, { level: 9 }));
  fs.writeFileSync(
    `${target}.br`,
    zlib.brotliCompressSync(source, {
      params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 },
    }),
  );
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

files.forEach(copyFile);
// 【优化说明】统一复制 assets 目录，确保新增的 WebP 衍生图不会遗漏到生产构建中。
directories.forEach(copyDirectory);

// 【优化说明】生产构建额外生成 gzip / brotli 文件，提升支持预压缩资源的平台首屏传输效率。
listDistFiles().forEach(compressFile);

console.log(`Production build created at ${dist}`);
