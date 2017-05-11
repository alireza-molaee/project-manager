#!/usr/bin/env node

let program = require("commander");
let colors = require("colors/safe");
let shell = require("shelljs");
let fs = require("fs");
let config;

function getConfig(path) {
	const data = fs.readFileSync(path, 'utf8');
	config = JSON.parse(data);
	console.log(colors.cyan('read config from', path))
}

program
  .version('0.0.1')
  .option('-c, --config <path>', 'set config path. defaults to "~/.proj.json"', getConfig)
 
program
  .command('add <name>')
  .description('create project directory init project.')
  .option("-g, --from-git <repo>", "clone project from git repo.")
  .action(function(name, options){
    if (options["from-git"]) {
    	console.log(colors.yellow(options["from-git"]));
    	console.log(colors.red(name));
    }
  });

program.parse(process.argv);