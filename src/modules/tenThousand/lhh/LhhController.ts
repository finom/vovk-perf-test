import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhhs")
export default class LhhController {
  @operation({
    summary: "Get Lhhs",
  })
  @get()
  static getLhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhh",
  })
  @post("{id}")
  static createLhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
