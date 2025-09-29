import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("boms")
export default class BomController {
  @operation({
    summary: "Get Boms",
  })
  @get()
  static getBoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bom",
  })
  @post("{id}")
  static createBom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
