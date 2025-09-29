import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("leis")
export default class LeiController {
  @operation({
    summary: "Get Leis",
  })
  @get()
  static getLeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lei",
  })
  @post("{id}")
  static createLei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
