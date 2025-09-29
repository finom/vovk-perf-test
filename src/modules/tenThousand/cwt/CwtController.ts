import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwts")
export default class CwtController {
  @operation({
    summary: "Get Cwts",
  })
  @get()
  static getCwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwt",
  })
  @post("{id}")
  static createCwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
