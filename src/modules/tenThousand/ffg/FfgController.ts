import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffgs")
export default class FfgController {
  @operation({
    summary: "Get Ffgs",
  })
  @get()
  static getFfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffg",
  })
  @post("{id}")
  static createFfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
