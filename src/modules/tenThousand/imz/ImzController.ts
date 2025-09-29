import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imzs")
export default class ImzController {
  @operation({
    summary: "Get Imzs",
  })
  @get()
  static getImzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imz",
  })
  @post("{id}")
  static createImz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
