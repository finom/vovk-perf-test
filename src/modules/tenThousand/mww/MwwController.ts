import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwws")
export default class MwwController {
  @operation({
    summary: "Get Mwws",
  })
  @get()
  static getMwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mww",
  })
  @post("{id}")
  static createMww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
