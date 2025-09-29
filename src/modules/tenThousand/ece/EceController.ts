import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eces")
export default class EceController {
  @operation({
    summary: "Get Eces",
  })
  @get()
  static getEces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ece",
  })
  @post("{id}")
  static createEce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
