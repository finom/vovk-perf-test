import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcis")
export default class GciController {
  @operation({
    summary: "Get Gcis",
  })
  @get()
  static getGcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gci",
  })
  @post("{id}")
  static createGci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
