const browserSync = require("browser-sync").create();

browserSync.init({
    proxy: "localhost:3000", // Your Node.js app
    port: 3000,              // Port for BrowserSync
    host: "localhost",  // Custom hostname (optional)             // Prevent BrowserSync from opening a new tab automatically
    ui: {
        port: 3000          // Port for BrowserSync UI
    },
    files: ["public/**/*.*", "views/**/*.*"]
});

browserSync.watch("views/**/*.*").on("change", browserSync.reload);
