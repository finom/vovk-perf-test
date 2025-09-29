import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmbs")
export default class BmbController {
  @operation({
    summary: "Get Bmbs",
  })
  @get()
  static getBmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmb",
  })
  @post("{id}")
  static createBmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
