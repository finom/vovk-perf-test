import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsqs")
export default class DsqController {
  @operation({
    summary: "Get Dsqs",
  })
  @get()
  static getDsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsq",
  })
  @post("{id}")
  static createDsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
