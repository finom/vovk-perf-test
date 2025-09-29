import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("homs")
export default class HomController {
  @operation({
    summary: "Get Homs",
  })
  @get()
  static getHoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hom",
  })
  @post("{id}")
  static createHom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
