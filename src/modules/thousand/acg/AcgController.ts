import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acgs")
export default class AcgController {
  @operation({
    summary: "Get Acgs",
  })
  @get()
  static getAcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acg",
  })
  @post("{id}")
  static createAcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
