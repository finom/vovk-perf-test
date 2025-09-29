import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("feas")
export default class FeaController {
  @operation({
    summary: "Get Feas",
  })
  @get()
  static getFeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fea",
  })
  @post("{id}")
  static createFea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
