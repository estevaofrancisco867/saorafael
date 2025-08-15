import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

// Converter import.meta.url para caminho de arquivo (necessário para path.resolve)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getPlugins() {
  // Lista de plugins essenciais
  const basePlugins = [react(), runtimeErrorOverlay()];

  // Verifica se está no ambiente de produção
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    basePlugins.push(cartographer());
  }

  return basePlugins;
}

export default defineConfig(async () => {
  return {
    base: "/", // Configurado para a raiz (Vercel geralmente roda na raiz)

    plugins: await getPlugins(), // Plugins definidos dinamicamente

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"), // Alias para o código do cliente
        "@shared": path.resolve(__dirname, "shared"), // Alias para código compartilhado
        "@assets": path.resolve(__dirname, "attached_assets"), // Alias para assets
      },
    },

    root: path.resolve(__dirname, "client"), // Raiz do cliente onde está o index.html

    build: {
      outDir: path.resolve(__dirname, "dist/public"), // Pasta de saída após o build
      emptyOutDir: true, // Limpa a pasta de saída antes de gerar novos arquivos
    },

    server: {
      fs: {
        strict: true,  // Validação de arquivos
        deny: ["**/.*"], // Bloquear arquivos ocultos (ex: .env, .gitignore)
      },
    },
  };
});
