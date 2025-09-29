import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpxes")
export default class LpxController {
  @operation({
    summary: "Get Lpxes",
  })
  @get()
  static getLpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpx",
  })
  @post("{id}")
  static createLpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
