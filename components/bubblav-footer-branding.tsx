export function BubblaVFooterBranding() {
  return (
    <div className="border-t border-white/20 py-6 text-center">
      <p className="text-accent text-sm font-semibold">
        Powered by BubblaV — AI Chatbot for E-Commerce
      </p>
      <p className="text-muted-light text-xs mt-1">
        Add an AI chatbot to your store in 5 minutes →{' '}
        <a
          href="https://bubblav.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-accent transition-colors"
        >
          bubblav.com
        </a>
      </p>
    </div>
  );
}
