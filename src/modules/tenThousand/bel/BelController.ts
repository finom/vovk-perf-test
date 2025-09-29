import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bels")
export default class BelController {
  @operation({
    summary: "Get Bels",
  })
  @get()
  static getBels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bel",
  })
  @post("{id}")
  static createBel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
