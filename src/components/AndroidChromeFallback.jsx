// components/AndroidChromeFallback.jsx
import { ErrorBoundary } from 'react-error-boundary';

// Detect Android Chrome specifically
const isAndroidChrome = () => {
  return /Android.*Chrome\/[.0-9]* Mobile/.test(navigator.userAgent);
};

const AndroidChromeFallbackUI = ({ error, resetErrorBoundary }) => {
  // Only show for Android Chrome, otherwise propagate error
  if (!isAndroidChrome()) {
    throw error;
  }

  return (
    <div className="android-chrome-fallback">
      <div className="error-icon">⚠️</div>
      <h2>3D Viewer Unavailable</h2>
      <p>We're having trouble with Chrome on your Android device:</p>
      <ul>
        <li>Tap <b>Chrome Settings</b> → <b>Site Settings</b> → Enable <b>WebGL</b></li>
        <li>Update Chrome in Play Store</li>
        <li>Try Firefox or Brave browser</li>
      </ul>
      <div className="action-buttons">
        <button 
          onClick={resetErrorBoundary}
          className="retry-button"
        >
          Retry
        </button>
        <a href="https://play.google.com/store/apps/details?id=org.mozilla.firefox" 
           className="firefox-button">
          Get Firefox
        </a>
      </div>
    </div>
  );
};

// Custom error boundary wrapper
const AndroidChromeErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={AndroidChromeFallbackUI}
      onReset={() => window.location.reload()}
      resetKeys={[window.location.pathname]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default AndroidChromeErrorBoundary;
