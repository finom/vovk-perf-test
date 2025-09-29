import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xps")
export default class XpController {
  @operation({
    summary: "Get Xps",
  })
  @get()
  static getXps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xp",
  })
  @post("{id}")
  static createXp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
