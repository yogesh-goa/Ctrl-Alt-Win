import React from "react";
import OCRUploader from "../components/OCRUploader";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">LayoutLMv3 OCR Extractor</h1>
      <OCRUploader />
    </div>
  );
};

export default Home;
