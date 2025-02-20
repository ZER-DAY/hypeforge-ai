"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Project } from "@/lib/types";
import { BadgeCheck } from "lucide-react";
import { blurhashToBase64 } from "blurhash-base64";

const ProjectModal = ({ project }: { project: Project }) => {
  return (
    <div dir="rtl">
      <Dialog>
        <DialogTrigger>
          <Image
            src={project.image}
            alt={`Project in ${project.location}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            placeholder="blur"
            blurDataURL={blurhashToBase64("LQJ@LFJnp{-Uxuf6RjWVK5s:xGRj")}
            className="object-cover rounded-lg"
            onError={(e) => console.error("Image loading error:", e)}
          />
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] w-[95%] md:w-[85%] lg:w-[70%] p-4 md:p-6 overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-6 overflow-y-auto">
            <div className="flex-shrink-0 w-full md:w-[40%]">
              <Image
                src={project.image}
                alt={`Project in ${project.location}`}
                width={400}
                height={400}
                priority
                className="object-cover rounded-lg w-full h-[200px] md:h-[300px] lg:h-[400px]"
                onError={(e) => console.error("Image loading error:", e)}
              />
            </div>

            <DialogHeader className="flex-1 space-y-4">
              <div>
                <DialogTitle
                  className="text-2xl md:text-3xl lg:text-4xl text-right font-bold tracking-tighter bg-gradient-to-r text-amber-300"
                  dir="rtl"
                >
                  {project.title}
                </DialogTitle>
                <span className="block text-muted-foreground text-sm mt-1 text-left h2-style">
                  {project.location}
                </span>
              </div>

              {/* زر "تعرف على المزيد" - في المنتصف */}
              <div className="flex justify-center items-center mt-6">
                {project.link ? (
                  <a
                    href={project.link}
                    className="bg-yellow-500 text-black text-sm font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:bg-yellow-600 text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    تعرف على المزيد
                  </a>
                ) : (
                  <p className="text-gray-400">لا يوجد رابط متاح</p>
                )}
              </div>

              <DialogDescription
                className="text-white text-base md:text-lg leading-relaxed text-right"
                dir="rtl"
              >
                {project.description}
              </DialogDescription>

              <ul className="list-inside text-white space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start md:items-center gap-2 text-sm md:text-base"
                  >
                    <BadgeCheck className="w-4 h-4 flex-shrink-0 text-amber-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectModal;
