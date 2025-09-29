import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltns")
export default class LtnController {
  @operation({
    summary: "Get Ltns",
  })
  @get()
  static getLtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltn",
  })
  @post("{id}")
  static createLtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
