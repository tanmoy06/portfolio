import React from "react";
import {
  SiFlutter,
  SiDart,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiExpo,
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiPostman,
  SiLinux,
  SiDocker,
  SiFastapi,
  SiReact,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbApi, TbBrain, TbLayersIntersect } from "react-icons/tb";
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Brain,
  Wrench,
} from "lucide-react";

export const skillGroups = [
  {
    label: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Java", icon: FaJava, color: "#EA2D2E" },
      { name: "C", icon: SiC, color: "#659AD2" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    label: "Mobile App Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#47C5FB" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "GetX", icon: TbLayersIntersect, color: "#A855F7" },
      { name: "Expo", icon: SiExpo, color: "#E2E8F0" },
    ],
  },
  {
    label: "Backend & Cloud",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "REST APIs", icon: TbApi, color: "#38BDF8" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    ],
  },
  {
    label: "Databases & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Cloud Firestore", icon: SiFirebase, color: "#FFA611" },
    ],
  },
  {
    label: "AI / Machine Learning",
    icon: Brain,
    skills: [
      { name: "AI/ML Systems", icon: TbBrain, color: "#C084FC" },
      { name: "Python (Data/ML)", icon: SiPython, color: "#38BDF8" },
    ],
  },
  {
    label: "Dev Tools & Environment",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#F0F6FC" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Linux / CLI", icon: SiLinux, color: "#FCC624" },
    ],
  },
];

