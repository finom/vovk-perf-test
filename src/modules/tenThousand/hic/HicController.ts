import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hics")
export default class HicController {
  @operation({
    summary: "Get Hics",
  })
  @get()
  static getHics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hic",
  })
  @post("{id}")
  static createHic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
