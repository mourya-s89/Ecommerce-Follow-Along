const multer = require('multer');
const path = require('path');

// Define storage for user images
const userImageStore = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set upload destination folder
    cb(null, path.join(__dirname, '../public/uploads/userImages'));
  },
  filename: function (req, file, cb) {
    // Generate a unique filename with a timestamp and original extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, Date.now() + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Configure multer with storage and additional options
const userImage = multer({
  storage: userImageStore,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
  fileFilter: function (req, file, cb) {
    // Validate file extension and MIME type
    const extension = path.extname(file.originalname).toLowerCase();
    const mimetype = file.mimetype;

    // Allowed extensions and MIME types
    const allowedExtensions = {
      '.jpeg': true,
      '.png': true,
      '.jpg': true,
    };
    const allowedMimetype = {
      'image/jpeg': true,
      'image/png': true,
      'image/jpg': true,
    };

    if (!allowedExtensions[extension] || !allowedMimetype[mimetype]) {
      cb(new Error('File extension or MIME type is not allowed.'));
    } else {
      cb(null, true);
    }
  }
});

// Export the configured multer instance
module.exports = { userImage };
