#!/bin/bash

cd output
git config user.email "travis@travis-ci.org"
git config user.name "travis-ci"
git add -A
git commit -m "[ci skip] publish website"
git push -fq origin master > /dev/null