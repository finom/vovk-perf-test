import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfis")
export default class LfiController {
  @operation({
    summary: "Get Lfis",
  })
  @get()
  static getLfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfi",
  })
  @post("{id}")
  static createLfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
