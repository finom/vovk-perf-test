import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnds")
export default class MndController {
  @operation({
    summary: "Get Mnds",
  })
  @get()
  static getMnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnd",
  })
  @post("{id}")
  static createMnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
