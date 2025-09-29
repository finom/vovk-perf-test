import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhis")
export default class LhiController {
  @operation({
    summary: "Get Lhis",
  })
  @get()
  static getLhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhi",
  })
  @post("{id}")
  static createLhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
