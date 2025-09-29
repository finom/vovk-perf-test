import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmhs")
export default class BmhController {
  @operation({
    summary: "Get Bmhs",
  })
  @get()
  static getBmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmh",
  })
  @post("{id}")
  static createBmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
