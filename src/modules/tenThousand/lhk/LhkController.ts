import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhks")
export default class LhkController {
  @operation({
    summary: "Get Lhks",
  })
  @get()
  static getLhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhk",
  })
  @post("{id}")
  static createLhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
