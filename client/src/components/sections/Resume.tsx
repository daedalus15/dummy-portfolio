import { Download, FileText, ExternalLink } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";

export function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Suchir_M_Velpanur_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-mono">
            <span className="text-neon-teal">07.</span> 
            <span className="text-white dark:text-white section-underline">Resume</span>
          </h2>
          <div className="font-mono text-neon-green text-sm mb-6">$ cat resume.pdf</div>
          
          <div className="glow-border rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-neon-teal/20 border-2 border-neon-teal">
                <FileText className="w-12 h-12 text-neon-teal" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white dark:text-white mb-4">
              Download My Resume
            </h3>
            <p className="text-gray-300 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Get a comprehensive overview of my education, experience, projects, and achievements in a professionally formatted PDF document.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton onClick={handleDownload} className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </NeonButton>
              <NeonButton 
                variant="secondary" 
                onClick={handleDownload}
                className="flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Resume
              </NeonButton>
            </div>
            
            <div className="mt-6 text-sm text-gray-400 dark:text-gray-400 font-mono">
              Last updated: January 2025 | PDF Format | 2 pages
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}