function getFlag(flag) {
  const indexFlag = process.argv.findIndex(arg => arg == `--${flag}`);
  let indexNextFlag

  process.argv.forEach((arg, index, args) => {
    if (index > indexFlag) {
      if ((arg[0] + arg[1]) == '--') {
        indexNextFlag = index;
        return;
      } else if (index == args.length - 1 && !indexNextFlag){
        indexNextFlag = index + 1;
      }
    }
  });

  return process.argv.slice(indexFlag + 1, indexNextFlag).join(' ');
}

module.exports = getFlag;