#!/bin/bash

chmod +x dist/*.js

npm version patch

npm publish

git push
