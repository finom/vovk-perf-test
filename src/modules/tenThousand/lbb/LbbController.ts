import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbbs")
export default class LbbController {
  @operation({
    summary: "Get Lbbs",
  })
  @get()
  static getLbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbb",
  })
  @post("{id}")
  static createLbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
