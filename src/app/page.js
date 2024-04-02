"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import YouTube from "react-youtube"; // You need to install 'react-youtube' package
import ReactPlayer from "react-player";

export default function Home() {
  const [videoLink, setVideoLink] = useState("");
  const [videoType, setVideoType] = useState("youtube");
  const [blogText, setBlogText] = useState("");
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your code to extract text from the video link goes here
    // Once you have extracted the text, set it to the state variable blogText
    setBlogText(`<a href="#"><strong>00:02</strong></a> | This is a sample blog text extracted from the video.<br/><a href="#"><strong>01:32</strong></a> | Blog will be created in this text format and the timestamps on the left will be clickable to find corresponding text in the video`);
  };

  const handleVideoTypeChange = (event) => {
    setVideoType(event.target.value);
  };

  const handleFileDrop = (acceptedFiles) => {
    // Handle the dropped file here
    const file = acceptedFiles[0];
    setUploadedVideo(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "video/*",
    onDrop: handleFileDrop,
  });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Video to Blog Converter</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center mb-4">
          <label htmlFor="videoType" className="mr-4">
            Video Type:
          </label>
          <select
            id="videoType"
            value={videoType}
            onChange={handleVideoTypeChange}
            className="border border-gray-300 px-2 py-1 rounded"
          >
            <option value="youtube">YouTube Video</option>
            <option value="upload">Upload Video</option>
          </select>
        </div>
        {videoType === "youtube" ? (
          <div className="mb-4">
            <label htmlFor="videoLink" className="mr-4">
              YouTube Video Link:
            </label>
            <div className="flex flex-row gap-2">
              <input
                type="text"
                id="videoLink"
                value={videoLink}
                onChange={handleChange}
                placeholder="Enter YouTube video link"
                className="border border-gray-300 px-2 py-1 rounded w-64"
              />
              <button
                onClick={() => setUploadedVideo(videoLink)}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <div
              {...getRootProps({
                className:
                  "dropzone border border-dashed border-gray-300 p-4 mb-2",
              })}
            >
              <input {...getInputProps()} />
              <div className="text-center text-gray-400">
                Drop here the video file to upload...
              </div>
            </div>
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Convert
        </button>
      </form>
      {uploadedVideo && (
        <div className="mb-4">
          <ReactPlayer url={uploadedVideo} controls />
        </div>
      )}
      <div className="blog">
        <h2 className="text-xl font-semibold mb-2">Generated Blog:</h2>
        <div dangerouslySetInnerHTML={{ __html: blogText }} />
      </div>
    </div>
  );
}
