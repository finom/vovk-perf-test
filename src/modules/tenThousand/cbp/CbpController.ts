import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbps")
export default class CbpController {
  @operation({
    summary: "Get Cbps",
  })
  @get()
  static getCbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbp",
  })
  @post("{id}")
  static createCbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
