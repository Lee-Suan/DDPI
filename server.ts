import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const DATA_FILE = path.join(process.cwd(), "data.json");
const PORT = 3000;

// Initial placeholder data
const initialData = {
  theme: {
    primary: "#000000",
    accent: "#8B5CF6", // Purple
    font: "Noto Sans KR"
  },
  siteInfo: {
    name: "대경데이터정책연구원(DDPI)",
    description: "Tourism · Agriculture · Big Data\n전문성과 풍부한 현장 경험을 바탕으로 실효성 있는 정책과 차별화된 전략을 제안합니다.",
    slogan: "Data-driven Policy & Regional Innovation",
    subSlogan: "데이터 기반 정책과 지역 혁신을 연구합니다.",
    contactEmail: "gomklee1@gmail.com",
    contactPhone: "010-9196-3053",
    address: "대한민국 (전국 대응 가능)",
    representative: "이수안(SUAN LEE)",
    logoUrl: ""
  },
  services: [
    { id: 1, title: "연구용역", items: ["지자체, 공공기관, 기업 맞춤형 연구용역 수행"] },
    { id: 2, title: "데이터 분석", items: ["최신 트렌드 분석 및 지역 산업 데이터 분석"] },
    { id: 3, title: "데이터 교육", items: ["조직 역량 강화를 위한 데이터 분석 실습"] },
    { id: 4, title: "경영 컨설팅", items: ["관광 및 농업 특화 비즈니스 솔루션 제공"] }
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

  app.post("/api/contact", async (req, res) => {
    const { name, email, organization, message } = req.body;
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    const targetEmail = data.siteInfo.contactEmail || "gomklee1@gmail.com";

    console.log(`[Contact Form Submission] To: ${targetEmail}`);
    console.log(`From: ${name} (${email})`);
    console.log(`Organization: ${organization}`);
    console.log(`Message: ${message}`);

    // Real email sending logic
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"DDPI Contact Form" <${process.env.EMAIL_USER}>`,
          to: targetEmail,
          subject: `[DDPI 문의] ${name}님의 문의가 접수되었습니다.`,
          text: `
            성함: ${name}
            이메일: ${email}
            소속: ${organization}
            
            내용:
            ${message}
          `,
          html: `
            <h3>새로운 문의가 접수되었습니다.</h3>
            <p><strong>성함:</strong> ${name}</p>
            <p><strong>이메일:</strong> ${email}</p>
            <p><strong>소속:</strong> ${organization}</p>
            <p><strong>내용:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        });
        res.json({ success: true, message: "Email sent successfully" });
      } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email" });
      }
    } else {
      // If no credentials, just simulate success for the demo
      console.warn("EMAIL_USER or EMAIL_PASS not set. Email not sent, but logged to console.");
      res.json({ success: true, message: "Inquiry logged to console (Email credentials missing)" });
    }
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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
