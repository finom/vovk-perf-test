import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aijs")
export default class AijController {
  @operation({
    summary: "Get Aijs",
  })
  @get()
  static getAijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aij",
  })
  @post("{id}")
  static createAij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
