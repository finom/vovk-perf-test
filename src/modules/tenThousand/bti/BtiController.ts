import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btis")
export default class BtiController {
  @operation({
    summary: "Get Btis",
  })
  @get()
  static getBtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bti",
  })
  @post("{id}")
  static createBti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
