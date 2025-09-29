import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwks")
export default class CwkController {
  @operation({
    summary: "Get Cwks",
  })
  @get()
  static getCwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwk",
  })
  @post("{id}")
  static createCwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
