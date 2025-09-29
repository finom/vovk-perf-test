import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewds")
export default class EwdController {
  @operation({
    summary: "Get Ewds",
  })
  @get()
  static getEwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewd",
  })
  @post("{id}")
  static createEwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
