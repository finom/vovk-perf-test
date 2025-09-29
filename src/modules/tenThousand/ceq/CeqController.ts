import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ceqs")
export default class CeqController {
  @operation({
    summary: "Get Ceqs",
  })
  @get()
  static getCeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ceq",
  })
  @post("{id}")
  static createCeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
