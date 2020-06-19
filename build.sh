set -e
rm -rf ./dist
npm run build
cp ./favicon.ico ./dist/
