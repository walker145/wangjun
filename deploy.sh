#确保脚本抛出遇到的错误
set -e
#生成静态文件
yarn run build
rm -rf ../blogs/dist/*

#将build生成的dist目录拷贝到上一层目录
cp -rf dist ../blog/

#进入生成的文件夹
cd ../blogs/dist
 
 #git 初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'deploy'
git branch -M main
 
git push -f "https://github.com/walker145/wangjun.git" main

