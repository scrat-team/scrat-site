#!/bin/bash

if [ -d output ]; then
    echo "➥ Commit files"
    version=`node -p 'require("./package.json").version;'`
    git clone --quiet --branch=master https://${GH_TOKEN}@github.com/${REPO_SLUG}.git ${REPO_SLUG} > /dev/null
    cp -fr output/* ${REPO_SLUG}
    cd ${REPO_SLUG}
    cp public/scrat-site/${version}/index.html .
    ls -l
    git config user.email "travis@travis-ci.org"
    git config user.name "travis-ci"
    git add -A
    git commit -m "[ci skip] publish website"
    git push -fq origin master > /dev/null
else
    echo '➥ Fail'
    exit 1
fi