import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpis")
export default class DpiController {
  @operation({
    summary: "Get Dpis",
  })
  @get()
  static getDpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpi",
  })
  @post("{id}")
  static createDpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
