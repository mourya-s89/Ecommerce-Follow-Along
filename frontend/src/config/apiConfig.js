// API configuration for different environments
const config = {
  // Backend API base URLs
  apiBaseUrl: {
    // For local development - use Vite's proxy to avoid CORS issues
    development: '/api',
    // For production deployment
    production: 'https://ecommerce-follow-along-ffxu.onrender.com',
  },
  // Get the current environment
  getEnvironment: () => {
    // Check if we're running on localhost
    const isLocalhost = window.location.hostname === 'localhost' ||
                        window.location.hostname === '127.0.0.1';
    return isLocalhost ? 'development' : 'production';
  },
  // Get the appropriate API base URL for the current environment
  getBaseUrl: function() {
    return this.apiBaseUrl[this.getEnvironment()];
  }
};

export default config;
