import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmrs")
export default class BmrController {
  @operation({
    summary: "Get Bmrs",
  })
  @get()
  static getBmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmr",
  })
  @post("{id}")
  static createBmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
