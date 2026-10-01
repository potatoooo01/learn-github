const fs=require('fs'),path=require('path'),vm=require('vm');
for(const file of fs.readdirSync('src').filter(x=>x.endsWith('.js')))new vm.Script(fs.readFileSync(path.join('src',file),'utf8'),{filename:file});
fs.mkdirSync('dist',{recursive:true});
for(const name of ['index.html','brain_platform_sectional_anatomy_v23.html','src','public'])fs.cpSync(name,path.join('dist',name),{recursive:true});
console.log('Static production build verified and copied to dist/');
