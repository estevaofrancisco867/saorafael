import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

// Converter o import.meta.url para caminho de arquivo (necessário para path.resolve)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para configurar plugins dinamicamente
async function getPlugins() {
  const basePlugins = [react(), runtimeErrorOverlay()];
  
  // Só adiciona o Cartographer se não for produção e estiver rodando no Replit
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    basePlugins.push(cartographer());
  }

  return basePlugins;
}

// Exporta a configuração do Vite
export default defineConfig(async () => {
  return {
    base: "/saorafael/", // IMPORTANTE para GitHub Pages

    plugins: await getPlugins(),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },

    root: path.resolve(__dirname), // <-- ALTERADO para raiz do projeto

    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },

    server: {
      fs: {
        strict: true,
        deny: ["**/.*"], // bloqueia acesso a arquivos ocultos
      },
    },
  };
});
