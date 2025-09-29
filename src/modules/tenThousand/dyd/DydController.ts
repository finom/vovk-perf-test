import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyds")
export default class DydController {
  @operation({
    summary: "Get Dyds",
  })
  @get()
  static getDyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyd",
  })
  @post("{id}")
  static createDyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
