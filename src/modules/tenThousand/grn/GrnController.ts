import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grns")
export default class GrnController {
  @operation({
    summary: "Get Grns",
  })
  @get()
  static getGrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grn",
  })
  @post("{id}")
  static createGrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
