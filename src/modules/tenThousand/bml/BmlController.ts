import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmls")
export default class BmlController {
  @operation({
    summary: "Get Bmls",
  })
  @get()
  static getBmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bml",
  })
  @post("{id}")
  static createBml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
