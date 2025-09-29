import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgbs")
export default class MgbController {
  @operation({
    summary: "Get Mgbs",
  })
  @get()
  static getMgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgb",
  })
  @post("{id}")
  static createMgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
