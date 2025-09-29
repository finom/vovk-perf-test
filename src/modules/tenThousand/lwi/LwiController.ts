import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwis")
export default class LwiController {
  @operation({
    summary: "Get Lwis",
  })
  @get()
  static getLwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwi",
  })
  @post("{id}")
  static createLwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
