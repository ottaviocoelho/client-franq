import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Corrigir __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos estáticos da pasta dist
app.use(express.static(path.join(__dirname, "dist")));

// Redireciona todas as rotas para o index.html (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Porta do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
