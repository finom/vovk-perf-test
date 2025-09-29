import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtns")
export default class JtnController {
  @operation({
    summary: "Get Jtns",
  })
  @get()
  static getJtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtn",
  })
  @post("{id}")
  static createJtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
