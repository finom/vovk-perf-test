import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anws")
export default class AnwController {
  @operation({
    summary: "Get Anws",
  })
  @get()
  static getAnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anw",
  })
  @post("{id}")
  static createAnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
