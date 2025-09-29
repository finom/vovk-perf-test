import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgzs")
export default class LgzController {
  @operation({
    summary: "Get Lgzs",
  })
  @get()
  static getLgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgz",
  })
  @post("{id}")
  static createLgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
