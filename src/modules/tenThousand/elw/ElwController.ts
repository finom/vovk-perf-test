import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elws")
export default class ElwController {
  @operation({
    summary: "Get Elws",
  })
  @get()
  static getElws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elw",
  })
  @post("{id}")
  static createElw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
