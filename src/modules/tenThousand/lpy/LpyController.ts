import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpies")
export default class LpyController {
  @operation({
    summary: "Get Lpies",
  })
  @get()
  static getLpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpy",
  })
  @post("{id}")
  static createLpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
