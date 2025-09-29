import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjks")
export default class BjkController {
  @operation({
    summary: "Get Bjks",
  })
  @get()
  static getBjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjk",
  })
  @post("{id}")
  static createBjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
