import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t bg-card py-8">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          <p className="font-medium">Contact me:</p>
          <a
            href="mailto:hady@competencybridge.com"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            hady@competencybridge.com
          </a>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>Copyright &copy; {new Date().getFullYear()} Hady Mostafa. All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/hadymostafa/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com/hadymostafa"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
