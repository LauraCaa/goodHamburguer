/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignorar errores de TS durante el build de producción
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignorar errores de ESLint durante el build de producción
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;