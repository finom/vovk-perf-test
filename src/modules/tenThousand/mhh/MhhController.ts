import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhhs")
export default class MhhController {
  @operation({
    summary: "Get Mhhs",
  })
  @get()
  static getMhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhh",
  })
  @post("{id}")
  static createMhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
