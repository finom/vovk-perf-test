import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imbs")
export default class ImbController {
  @operation({
    summary: "Get Imbs",
  })
  @get()
  static getImbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imb",
  })
  @post("{id}")
  static createImb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
