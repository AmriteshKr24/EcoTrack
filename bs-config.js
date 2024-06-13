const browserSync = require("browser-sync").create();

browserSync.init({
    proxy: "localhost:3000",
    port: 3000,
    host: "localhost", 
    ui: {
        port: 3003
    },
    files: ["public/**/*.*", "views/**/*.*"]
});

browserSync.watch("views/**/*.*").on("change", browserSync.reload);
