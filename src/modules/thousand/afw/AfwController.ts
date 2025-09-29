import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afws")
export default class AfwController {
  @operation({
    summary: "Get Afws",
  })
  @get()
  static getAfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afw",
  })
  @post("{id}")
  static createAfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
