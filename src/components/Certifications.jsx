import React, { useState, useEffect } from "react";
import { Award, ShieldCheck, Eye, X, ExternalLink, Loader2, Code2 } from "lucide-react";
import { Badge } from "./ui/Badge";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Button } from "./ui/Button";

const certifications = [
  {
    id: 1,
    title: "Certificate of Completion",
    organization: "Technical Training / Professional Course",
    note: "Official certification validating technical curriculum completion and domain assessments.",
    previewUrl: "https://drive.google.com/file/d/1rFLb0ne0Tkb0TZbx1yRB-VHOOX4IzkjV/preview",
    externalUrl: "https://drive.google.com/file/d/1rFLb0ne0Tkb0TZbx1yRB-VHOOX4IzkjV/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Participation Certificate",
    organization: "Hackaut • CodeXcellence 2024",
    note: "Official verifiable certificate validating active participation in CodeXcellence 2024 hackathon.",
    previewUrl: "https://certificate.givemycertificate.com/c/d6386d39-848a-4f29-a8c4-ba450ad621e7",
    externalUrl: "https://certificate.givemycertificate.com/c/d6386d39-848a-4f29-a8c4-ba450ad621e7",
  },
  {
    id: 3,
    title: "Certificate of Achievement",
    organization: "University Badminton Tournament",
    note: "Official certificate recognizing sports participation and achievement in intra-university badminton tournament.",
    previewUrl: "https://drive.google.com/file/d/1UDnSH1i7I37SVHAMX8jEjYlpj7ABsvVc/preview",
    externalUrl: "https://drive.google.com/file/d/1UDnSH1i7I37SVHAMX8jEjYlpj7ABsvVc/view?usp=drive_link",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  const handleOpenCert = (cert) => {
    setIframeLoading(true);
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="section-spacing relative" aria-labelledby="cert-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <Badge variant="primary" className="mb-3">
            05 // Verified Credentials
          </Badge>
          <h2
            id="cert-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100"
          >
            Certifications
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            Verified certificates and formal credentials. Click to preview certificates directly on this website.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <SpotlightCard
              key={cert.id}
              className="p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Award size={20} />
                  </div>
                  <Badge variant="success" className="text-[11px] gap-1">
                    <ShieldCheck size={12} />
                    Verified Document
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-3">
                  {cert.organization}
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {cert.note}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleOpenCert(cert)}
                  className="w-full sm:w-auto gap-2 font-mono text-xs hover:border-purple-500/50 hover:text-purple-300 transition-colors cursor-pointer"
                >
                  <Eye size={13} className="text-purple-400" />
                  <span>View Certificate</span>
                </Button>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* In-Website Certificate Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-200"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
        >
          <div
            className="relative w-full max-w-4xl h-[88vh] bg-zinc-950 border border-zinc-800/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Award size={16} />
                </div>
                <div className="min-w-0">
                  <h3
                    id="modal-cert-title"
                    className="text-sm sm:text-base font-semibold text-zinc-100 truncate"
                  >
                    {selectedCert.title}
                  </h3>
                  <p className="text-[11px] font-mono text-zinc-400 truncate">
                    {selectedCert.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 ml-3">
                <a
                  href={selectedCert.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 rounded-lg transition-colors"
                  title="Open source file"
                  aria-label="Open source file in new tab"
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close certificate preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Content - Embedded Viewer */}
            <div className="relative flex-1 w-full bg-zinc-900/40">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-950/80 z-10">
                  <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
                  <p className="text-xs font-mono text-zinc-400">Loading certificate preview...</p>
                </div>
              )}
              <iframe
                src={selectedCert.previewUrl}
                title={selectedCert.title}
                className="w-full h-full border-0"
                allow="autoplay"
                onLoad={() => setIframeLoading(false)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
