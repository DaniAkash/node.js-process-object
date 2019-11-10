// Using the process object
// console.log(global.process);

/**
 * Getting the current node version
 */
console.log(global.process.version);

/**
 * Getting the current version of all modules
 */
console.log(global.process.versions);

/**
 * Current working directory
 */
console.log(process.cwd());

/**
 * Writing to standard output
 */
const logger = logData => {
  process.stdout.write(logData);
  process.stdout.write("\n");
};

logger("some data");

/**
 * Reading the arguments supplied to the node process in command line
 */
process.argv.forEach((arg, argIndex) => {
  console.log(argIndex + " : " + arg);
});

/**
 * Using process.nextTick
 */
console.log("start");
process.nextTick(() => {
  console.log("inside nextTick callback");
});
console.log("end");
