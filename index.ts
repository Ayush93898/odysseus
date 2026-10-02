#!/usr/bin/env bun
import { runWakeup } from "./tui/wakeup";
import { Command } from "commander";

const program = new Command();
program
  .name("odysseus-build")
  .description("Every project has a journey.");

program
  .command("wakeup")
  .description("show the banner and pick cli or telegram mode")
  .action(async () => {
    await runWakeup();
  });

await program.parseAsync(process.argv);
