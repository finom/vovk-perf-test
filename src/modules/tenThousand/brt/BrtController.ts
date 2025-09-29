import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brts")
export default class BrtController {
  @operation({
    summary: "Get Brts",
  })
  @get()
  static getBrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brt",
  })
  @post("{id}")
  static createBrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
