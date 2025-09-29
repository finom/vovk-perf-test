import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfvs")
export default class LfvController {
  @operation({
    summary: "Get Lfvs",
  })
  @get()
  static getLfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfv",
  })
  @post("{id}")
  static createLfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
