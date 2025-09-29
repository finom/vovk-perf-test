import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmks")
export default class BmkController {
  @operation({
    summary: "Get Bmks",
  })
  @get()
  static getBmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmk",
  })
  @post("{id}")
  static createBmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
