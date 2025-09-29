import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpos")
export default class FpoController {
  @operation({
    summary: "Get Fpos",
  })
  @get()
  static getFpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpo",
  })
  @post("{id}")
  static createFpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
