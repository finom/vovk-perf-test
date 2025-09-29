import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmps")
export default class FmpController {
  @operation({
    summary: "Get Fmps",
  })
  @get()
  static getFmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmp",
  })
  @post("{id}")
  static createFmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
