import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvts")
export default class MvtController {
  @operation({
    summary: "Get Mvts",
  })
  @get()
  static getMvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvt",
  })
  @post("{id}")
  static createMvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
