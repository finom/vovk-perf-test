import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwws")
export default class GwwController {
  @operation({
    summary: "Get Gwws",
  })
  @get()
  static getGwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gww",
  })
  @post("{id}")
  static createGww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
