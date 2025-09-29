import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ircs")
export default class IrcController {
  @operation({
    summary: "Get Ircs",
  })
  @get()
  static getIrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irc",
  })
  @post("{id}")
  static createIrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
