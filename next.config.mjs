const isProd = false
const abc = 'abc'
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/visorry.github.io/' : '',
  basePath: isProd ? '/visorry.github.io' : '',
  output: 'export'
};

export default nextConfig;