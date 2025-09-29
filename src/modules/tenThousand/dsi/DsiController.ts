import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsis")
export default class DsiController {
  @operation({
    summary: "Get Dsis",
  })
  @get()
  static getDsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsi",
  })
  @post("{id}")
  static createDsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
