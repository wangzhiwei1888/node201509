//cwd current working directory 当前工作目录
console.log(process.cwd());
console.log(__dirname);
console.log('---------------------');
//change directory 改变当前目录
process.chdir('..');
process.chdir('4.global');
console.log('---------------------');
console.log(process.cwd());
console.log(__dirname);

