import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwks")
export default class FwkController {
  @operation({
    summary: "Get Fwks",
  })
  @get()
  static getFwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwk",
  })
  @post("{id}")
  static createFwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
