import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekls")
export default class EklController {
  @operation({
    summary: "Get Ekls",
  })
  @get()
  static getEkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekl",
  })
  @post("{id}")
  static createEkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
