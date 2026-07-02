---
title: "DumbCLI"
description: "DumbCLI is a Node.js CLI tool that saves shell commands you've already verified, so you can rerun them instantly with aliases and `{}` placeholders instead of digging through history."
technologies: ["Javascript", "Yargs", "CLI-Table3", "Inquirer", "Prompts", "Chalk"]
hosted: Github
tags: []
date: 2025-01-30
github: "https://github.com/s488U/dumbcli"
live: ""
draft: false
featureOrder: 5
---


#### A small journey to my start of DumbCLI

Hi Everyone,
I was disappointed of my windows 10 eating ram like a hungry duck. So I switched to **Vanilla Arch Linux**. When I was starting linux, I had some problems especially the terminal.

The terminal is a huge headache for a windows user. In order to tweak my OS to support my system and some visual enhancement. I was reading **Arch Wiki** and saw a huge line of commands. I was worried and tensed by seeing those commands. But to be honest its kinda cool.

Somehow I catch up with the linux commands and learned about linux a lot. But I was not a freaking worm to remember all commands. When I want to tweak some settings I open the terminal and look up the terminal for a few seconds to remember the commands. But its not possible for me to remember it.

So, I thought for a second,
_'Why can't I build a CLI tool to help me to remember the commands???'_

Then I prepare to make a CLI tool to help me and planned some of the architectures.

- I know JavaScript, so I thought to create in NodeJS.
- I found out yargs and inquirer JavaScript library to capture the commands from the users terminal.
- Chalk JS library will help us to give colors for the commands. Kinda cool.
- Planned to use SQL Lite database for the project, but in order to test my commands. I choose to store it in a json file.
- Used CLI Table to arrange and list all the commands.

_Hmmm...! I only gave some of the libraries, not explained how the working of my project._

Here: Before explaining the working of project, let me explain what I need actually. I need the tool to remember my commands, so when i type short alias for the commands it need to execute in the terminal. And It need to list all the commands like list command bash.

Sounds simple first, but when I started to do a prototype using chatgpt. My head filled up with large scale project.

Here is the working of my project. When I type `add` command it need to add the command and store it in the JSON file. And the command will generate a unique number key for the specific command. And when I type and execute `run <id>` command it will run the command in the terminal. In order to list the command, `list` command will show all the stored commands.

Huhh!! Finally its looking cool. But I need the name for the CLI tool. I was thinking a unique name and I remembered, _I was developed this is because I lack remembering commands, so I am a dumb person.So I thought, why don't you just name it DUMB??_
Hmmm,, Let's call it _**`DumbCLI`**_ then.

I need to add some more featuress....

_hmm???? What if the stored list gets so long and how the user knows the command is in the list??_

- Let's add the command finding helper for DumbCLI.
- After that, I've added export and import helper for importing and exporting command list to other systems.
- Added alias for commands to run without unique key.
- Added short key for `d`  instead `dumb` command to make it ease of use.
- implemented dynamic inputting in saved commands before command execution.
- implemented safety features...

Now the current CLI tool have these functionalities. But remember all this I've done with the help of ChatGPT. This is just a prototype.

This is how I developed **DumbCLI** .

**_Next, I want to make it more powerful, so you can do even more with your commands… stay tuned!_**

**_Thank you guys for reading this.._**


