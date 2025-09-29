import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jids")
export default class JidController {
  @operation({
    summary: "Get Jids",
  })
  @get()
  static getJids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jid",
  })
  @post("{id}")
  static createJid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
