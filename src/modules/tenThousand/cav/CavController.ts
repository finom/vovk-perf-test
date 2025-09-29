import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cavs")
export default class CavController {
  @operation({
    summary: "Get Cavs",
  })
  @get()
  static getCavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cav",
  })
  @post("{id}")
  static createCav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
