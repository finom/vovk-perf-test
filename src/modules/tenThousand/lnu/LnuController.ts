import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnus")
export default class LnuController {
  @operation({
    summary: "Get Lnus",
  })
  @get()
  static getLnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnu",
  })
  @post("{id}")
  static createLnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
