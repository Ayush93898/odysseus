import chalk from "chalk";
import { select, isCancel } from "@clack/prompts";
import { runAgentMode } from "./agent/orchestrator";

export async function runCliMode() {
  while (true) {
    const mode = await select({
      message: "Choose CLI sub-mode",
      options: [
        { value: "agent", label: "Agent Mode" },
        { value: "plan", label: "Plan Mode" },
        { value: "ask", label: "Ask Mode" },
        { value: "back", label: "← Back to main menu" },
      ],
    });

    if (isCancel(mode) || mode === "back") return;

    if (mode === "agent") {
      await runAgentMode()
      console.log("agent");
    } else if (mode === "plan") {
      // await runPlanMode();
      console.log("plan");
    } else if (mode === "ask") {
      // await runAskMode();
      console.log("ask");
    } else if (mode !== "agent" && mode !== "plan" && mode !== "ask") {
      console.log(chalk.yellow("\nThat mode is not implemented yet.\n"));
    }
  }
}
