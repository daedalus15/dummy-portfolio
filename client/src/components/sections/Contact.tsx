import { useState } from "react";
import { Mail, Github, Linkedin, Code, Send, Cloud } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:smv1524@gmail.com", label: "Email", description: "smv1524@gmail.com" },
    { icon: Github, href: "https://github.com/suchirmv-1524", label: "GitHub", description: "suchirmv-1524" },
    { icon: Linkedin, href: "https://linkedin.com/in/suchir-m-velpanur-519413296", label: "LinkedIn", description: "Professional Profile" },
    { icon: Code, href: "https://leetcode.com/u/suchircodezzz", label: "LeetCode", description: "suchircodezzz" },
    { icon: Cloud, href: "#", label: "Google Cloud", description: "Skills Boost Profile" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-mono">
            <span className="text-neon-teal">09.</span> 
            <span className="text-white dark:text-white section-underline">Contact</span>
          </h2>
          <div className="font-mono text-neon-green text-sm mb-6">$ ping suchir</div>
          
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="glow-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-neon-teal mb-6 font-mono">~/connect</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-card"
                  >
                    <link.icon className="w-8 h-8 text-neon-green group-hover:text-neon-teal transition-colors" />
                    <div>
                      <div className="text-white dark:text-white font-semibold text-sm">{link.label}</div>
                      <div className="text-gray-400 dark:text-gray-400 text-xs">{link.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="glow-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-neon-teal mb-6 font-mono">~/send_message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-card-dark border-neon-teal/30 text-white dark:text-white focus:border-neon-teal"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-card-dark border-neon-teal/30 text-white dark:text-white focus:border-neon-teal"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-card-dark border-neon-teal/30 text-white dark:text-white focus:border-neon-teal resize-none"
                />
                <NeonButton
                  type="submit"
                  className="w-full"
                  disabled={contactMutation.isPending}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </NeonButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
