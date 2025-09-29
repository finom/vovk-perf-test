import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lscs")
export default class LscController {
  @operation({
    summary: "Get Lscs",
  })
  @get()
  static getLscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsc",
  })
  @post("{id}")
  static createLsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
