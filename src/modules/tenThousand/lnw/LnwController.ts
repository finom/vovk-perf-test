import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnws")
export default class LnwController {
  @operation({
    summary: "Get Lnws",
  })
  @get()
  static getLnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnw",
  })
  @post("{id}")
  static createLnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
