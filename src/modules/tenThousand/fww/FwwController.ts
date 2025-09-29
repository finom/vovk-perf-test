import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwws")
export default class FwwController {
  @operation({
    summary: "Get Fwws",
  })
  @get()
  static getFwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fww",
  })
  @post("{id}")
  static createFww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
