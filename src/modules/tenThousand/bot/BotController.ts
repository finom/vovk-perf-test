import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bot")
export default class BotController {
  @operation({
    summary: "Get Bot",
  })
  @get()
  static getBot = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bot",
  })
  @post("{id}")
  static createBot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
