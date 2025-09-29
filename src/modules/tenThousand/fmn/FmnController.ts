import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmns")
export default class FmnController {
  @operation({
    summary: "Get Fmns",
  })
  @get()
  static getFmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmn",
  })
  @post("{id}")
  static createFmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
