import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data.json");

// Initial placeholder data
const initialData = {
  theme: {
    primary: "#000000",
    accent: "#8B5CF6", // Purple
    font: "Noto Sans KR"
  },
  siteInfo: {
    name: "대경데이터정책연구원(DDPI)",
    description: "Tourism · Agriculture · Big Data\n전문성과 경험으로 정책과 전략을 설계합니다.",
    slogan: "Data-driven Policy & Regional Innovation",
    subSlogan: "데이터 기반 정책과 지역 혁신을 연구합니다.",
    contactEmail: "gomklee1@gmail.com",
    contactPhone: "010-9196-3053",
    address: "대한민국 (전국 대응 가능)",
    representative: "이수안(SUAN LEE)"
  },
  services: [
    { id: 1, title: "연구용역", items: ["지자체 연구용역", "공공기관 연구용역", "기업 연구용역"] },
    { id: 2, title: "시장조사 및 데이터 분석", items: ["트렌드 분석", "지역 산업 데이터 분석", "관광, 농업 데이터 분석"] },
    { id: 3, title: "빅데이터 교육", items: ["공공기관 데이터 교육", "빅데이터 분석 교육"] },
    { id: 4, title: "경영 컨설팅", items: ["관광 컨설팅", "농업 컨설팅"] }
  ]
};

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Routes
  app.get("/api/content", (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    res.json(data);
  });

  app.post("/api/content", (req, res) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    // SPA Fallback: Serve index.html for any unknown routes
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on http://0.0.0.0:3000");
  });
}

startServer();
