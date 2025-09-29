import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmbs")
export default class CmbController {
  @operation({
    summary: "Get Cmbs",
  })
  @get()
  static getCmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmb",
  })
  @post("{id}")
  static createCmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
