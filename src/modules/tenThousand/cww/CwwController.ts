import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwws")
export default class CwwController {
  @operation({
    summary: "Get Cwws",
  })
  @get()
  static getCwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cww",
  })
  @post("{id}")
  static createCww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
