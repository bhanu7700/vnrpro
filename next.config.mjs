const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
      loader: "custom",
      imageSizes: [],
      deviceSizes: [],
    },
    transpilePackages: ["next-image-export-optimizer"],
    env: {
      nextImageExportOptimizer_imageFolderPath: "public",
      nextImageExportOptimizer_exportFolderPath: "out",
      nextImageExportOptimizer_quality: "80",
      nextImageExportOptimizer_storePicturesInWEBP: "true",
      nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
      nextImageExportOptimizer_generateAndUseBlurImages: "true",
      nextImageExportOptimizer_remoteImageCacheTTL: "0",
    },
};

export default nextConfig;
