import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmws")
export default class BmwController {
  @operation({
    summary: "Get Bmws",
  })
  @get()
  static getBmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmw",
  })
  @post("{id}")
  static createBmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
