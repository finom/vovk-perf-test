import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmvs")
export default class FmvController {
  @operation({
    summary: "Get Fmvs",
  })
  @get()
  static getFmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmv",
  })
  @post("{id}")
  static createFmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
