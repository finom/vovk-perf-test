import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lus")
export default class LuController {
  @operation({
    summary: "Get Lus",
  })
  @get()
  static getLus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lu",
  })
  @post("{id}")
  static createLu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
