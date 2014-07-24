#!/bin/bash

if [ -d output ]; then
    echo "➥ Commit files"
    git clone --quiet --branch=deploy https://${GH_TOKEN}@github.com/${REPO_SLUG}.git ${REPO_SLUG} > /dev/null
    cp -r output/** ${REPO_SLUG}
    cd ${REPO_SLUG}
    git config user.email "travis@travis-ci.org"
    git config user.name "travis-ci"
    git add -A
    git commit -m "[ci skip] publish website"
    git push -fq origin master > /dev/null
else
    echo '➥ Fail'
    exit 1
fi