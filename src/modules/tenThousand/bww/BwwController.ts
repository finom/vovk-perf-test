import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwws")
export default class BwwController {
  @operation({
    summary: "Get Bwws",
  })
  @get()
  static getBwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bww",
  })
  @post("{id}")
  static createBww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
