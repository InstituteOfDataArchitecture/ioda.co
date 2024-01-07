#!/bin/zsh

bold="\033[1m"
blue="\033[0;34m"
green="\033[0;32m"
red="\033[0;31m"
reset="\033[0m"


echo "${blue}Updating npm packages ....${reset}"
npm install -g npm-check-updates && ncu -u && npm i
echo ""
