import Link from 'next/link';

export function DemoBanner() {
  return (
    <div className="bg-accent text-white text-center py-2.5 px-4">
      <p className="text-sm font-medium">
        Demo Store — This site showcases BubblaV AI Chatbot.{' '}
        <Link href="/demo" className="underline underline-offset-2 hover:text-white/80 transition-colors">
          Learn how to test →
        </Link>
      </p>
    </div>
  );
}
