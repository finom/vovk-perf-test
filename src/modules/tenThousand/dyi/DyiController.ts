import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyis")
export default class DyiController {
  @operation({
    summary: "Get Dyis",
  })
  @get()
  static getDyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyi",
  })
  @post("{id}")
  static createDyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
