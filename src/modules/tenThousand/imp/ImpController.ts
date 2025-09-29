import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imps")
export default class ImpController {
  @operation({
    summary: "Get Imps",
  })
  @get()
  static getImps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imp",
  })
  @post("{id}")
  static createImp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
