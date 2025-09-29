import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpls")
export default class DplController {
  @operation({
    summary: "Get Dpls",
  })
  @get()
  static getDpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpl",
  })
  @post("{id}")
  static createDpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
