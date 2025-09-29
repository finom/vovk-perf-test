import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyts")
export default class DytController {
  @operation({
    summary: "Get Dyts",
  })
  @get()
  static getDyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyt",
  })
  @post("{id}")
  static createDyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
