import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpgs")
export default class LpgController {
  @operation({
    summary: "Get Lpgs",
  })
  @get()
  static getLpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpg",
  })
  @post("{id}")
  static createLpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
