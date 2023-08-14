/** @format */

const fs = require("node:fs");

// Change file permissions
function readPermission(filename) {
  // fs.chmod(filename, mode, callback)
  fs.chmod(filename, 0o400, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      fs.readFile(filename, "utf-8", (err, result) => {
        if (err) {
          console.log("Don't have READ permission");
        } else {
          console.log(result);
        }
      });
      fs.writeFile(filename, "New Text", (err, result) => {
        if (err) {
          console.log("Don't have WRITE permission");
        } else {
          console.log(result);
        }
      });
    }
  });
}
// readPermission("text.txt");

// Write Permission
function writePermission(filename) {
  // fs.chmod(filename, mode, callback)
  fs.chmod(filename, 0o200, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      fs.readFile(filename, "utf-8", (err, result) => {
        if (err) {
          console.log("Don't have READ permission");
        } else {
          console.log("Read result: ", result);
        }
      });
      fs.writeFile(filename, "New Text1", (err, result) => {
        if (err) {
          console.log("Don't have WRITE permission");
        } else {
          console.log(result);
        }
      });
    }
  });
}
writePermission("text.txt");
