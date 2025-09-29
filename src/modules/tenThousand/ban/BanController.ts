import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bans")
export default class BanController {
  @operation({
    summary: "Get Bans",
  })
  @get()
  static getBans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ban",
  })
  @post("{id}")
  static createBan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
