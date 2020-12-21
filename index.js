import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("메인 URL에 오신 것을 환영합니다!");

const handleProfile = (req, res) => res.send("프로필 화면");

const betweenHome = (req, res, next) => {
    console.log("/ 거쳐가는 중...");
    next();
}

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);