import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfgs")
export default class LfgController {
  @operation({
    summary: "Get Lfgs",
  })
  @get()
  static getLfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfg",
  })
  @post("{id}")
  static createLfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
