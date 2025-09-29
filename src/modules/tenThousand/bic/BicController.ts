import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bics")
export default class BicController {
  @operation({
    summary: "Get Bics",
  })
  @get()
  static getBics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bic",
  })
  @post("{id}")
  static createBic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
