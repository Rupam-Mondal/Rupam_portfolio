"use client";

interface ProjectProps {
  index: number;
  projectname: string;
  info1: string;
  info2: string;
  image1: string;
  image2?: string;
  image3?: string;
  timeline: string;
  frontend: string;
  backend: string;
  type: string;
  githublink: string;
}

export default function ProjectComponent({
  index,
  projectname,
  info1,
  info2,
  image1,
  image2,
  image3,
  timeline,
  frontend,
  backend,
  type,
  githublink,
}: ProjectProps) {
  return (
    <div>
      
    </div>
  );
}