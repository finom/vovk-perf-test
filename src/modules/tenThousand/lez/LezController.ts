import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lezs")
export default class LezController {
  @operation({
    summary: "Get Lezs",
  })
  @get()
  static getLezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lez",
  })
  @post("{id}")
  static createLez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
