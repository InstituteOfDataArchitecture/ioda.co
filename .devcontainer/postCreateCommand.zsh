#!/bin/zsh


bold="\033[1m"
blue="\033[0;34m"
green="\033[0;32m"
red="\033[0;31m"
reset="\033[0m"

# Setup Ubuntu
echo "${blue}${bold}Setup Ubuntu${reset}"
echo ""
zsh .devcontainer/01_setupUbuntu.zsh

# Update npm
echo "${blue}${bold}Update npm${reset}"
echo ""
zsh .devcontainer/02_updateNpm.zsh

# Npm install
echo "${blue}${bold}Update npm packages${reset}"
echo ""
zsh .devcontainer/03_updateAndInstallNpmPackages.zsh
