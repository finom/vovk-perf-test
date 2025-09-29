import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bots")
export default class BotController {
  @operation({
    summary: "Get Bots",
  })
  @get()
  static getBots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bot",
  })
  @post("{id}")
  static createBot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
