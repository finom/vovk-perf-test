import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmns")
export default class BmnController {
  @operation({
    summary: "Get Bmns",
  })
  @get()
  static getBmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmn",
  })
  @post("{id}")
  static createBmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
