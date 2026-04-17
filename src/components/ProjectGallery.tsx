"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

type GalleryProject = {
  id: string;
  name: string;
  folder: string;
  imageCount: number; // For demo purposes, we assume up to 3 images per project. You can change this when you add images.
};

const galleryProjects: GalleryProject[] = [
  { id: "graana", name: "Graana Marketplace", folder: "graana", imageCount: 4 },
  { id: "housegen", name: "House Gen AI", folder: "housegen", imageCount: 4 },
  { id: "worksappweb", name: "WorksApp Web", folder: "worksappweb", imageCount: 0 },
  { id: "worksappmobile", name: "WorksApp Mobile", folder: "worksappMobile", imageCount: 0 },
  { id: "cda", name: "CDA Website", folder: "cda", imageCount: 4 },
];

export function ProjectGallery() {
  const [activeProjectId, setActiveProjectId] = useState<string>(galleryProjects[0].id);

  const activeProject = galleryProjects.find((p) => p.id === activeProjectId)!;

  useEffect(() => {
    const slider = document.getElementById("gallery-slider");
    if (slider) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeProjectId]);

  const scrollLeft = () => {
    const slider = document.getElementById("gallery-slider");
    if (slider) {
      const childWidth = slider.firstElementChild?.clientWidth || 300;
      slider.scrollBy({ left: -childWidth - 24, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const slider = document.getElementById("gallery-slider");
    if (slider) {
      const childWidth = slider.firstElementChild?.clientWidth || 300;
      slider.scrollBy({ left: childWidth + 24, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-16 w-full rounded-3xl border border-white/10 bg-white/[0.02] p-6 lg:p-10">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold text-white">Project Screenshots</h3>
        <p className="mt-2 text-sm text-slate-400">Select a project to view its interface.</p>
      </div>

      {/* Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {galleryProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProjectId(project.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-cyan-300 ${
              activeProjectId === project.id
                ? "bg-cyan-300 text-ink-950 shadow-glow"
                : "border border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/30 hover:bg-white/[0.08]"
            }`}
          >
            {project.name}
          </button>
        ))}
      </div>

      {/* Slider Container */}
      <div className="relative group">
        <button
          onClick={scrollLeft}
          className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-ink-950/80 p-3 text-white backdrop-blur-md transition hover:bg-cyan-300/20 hover:text-cyan-200 focus:outline-none md:-left-6"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          id="gallery-slider"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {activeProject.imageCount === 0 ? (
            <div className="flex w-full aspect-video flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-slate-500">
              <ImageIcon className="mb-3 h-10 w-10 opacity-30" />
              <p>Screenshots coming soon</p>
            </div>
          ) : (
            Array.from({ length: activeProject.imageCount }).map((_, i) => (
              <div
                key={`${activeProject.id}-${i}`}
                className="relative aspect-video min-w-[85vw] snap-center overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-xl md:min-w-[60vw] lg:min-w-[45vw]"
              >
                {/* Fallback pattern when images are not yet added by the user */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-900 text-slate-500">
                  <ImageIcon className="h-10 w-10 opacity-50" />
                  <p className="font-mono text-sm">
                    public/projects/{activeProject.folder}/img{i + 1}.png
                  </p>
                  <p className="text-xs text-slate-600">Paste your image here</p>
                </div>

                <img
                  src={`/projects/${activeProject.folder}/img${i + 1}.png`}
                  alt={`${activeProject.name} screenshot ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    // Hide image if it fails to load (before user adds them)
                    (e.target as HTMLImageElement).style.opacity = "0";
                  }}
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).style.opacity = "1";
                  }}
                />
              </div>
            ))
          )}
        </div>

        <button
          onClick={scrollRight}
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-ink-950/80 p-3 text-white backdrop-blur-md transition hover:bg-cyan-300/20 hover:text-cyan-200 focus:outline-none md:-right-6"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
         {Array.from({ length: activeProject.imageCount }).map((_, i) => (
           <div key={i} className="h-1.5 w-8 rounded-full bg-white/10" />
         ))}
      </div>
    </div>
  );
}
