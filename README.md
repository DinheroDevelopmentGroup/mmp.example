# example

This is an [MMP](https://github.com/DinheroDevelopmentGroup/modular-minecraft-proxy) module.
Generated using [M3](https://github.com/DinheroDevelopmentGroup/modular-minecraft-proxy/tree/main/src/m3) init.

## How to use

1. Install [modular-minecraft-proxy](https://github.com/DinheroDevelopmentGroup/modular-minecraft-proxy)
   1. run `git clone https://github.com/DinheroDevelopmentGroup/modular-minecraft-proxy.git` to get source code
   1. run `cd modular-minecraft-proxy` to enter project directory
   1. run `npm install` to install dependencies
   1. run `npm link` to make `m3` available as a command
1. Install `ddg.example` module
   1. run `m3 install github://DinheroDevelopmentGroup/mmp.example.git`
1. Build
   1. run `npm run build` to compile TypeScript
   1. run `npm run copy` to copy module dependencies
1. Start
   1. run `export TARGET_HOST=...` (replace `...` with your target's host)
   1. run `npm run run` to start the proxy
1. Connect
   1. connect to `localhost:25565` using a Minecraft client

You should now connect to the target you configured, but, there should be a clock on your action bar.
