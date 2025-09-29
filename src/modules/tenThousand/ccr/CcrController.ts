import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccrs")
export default class CcrController {
  @operation({
    summary: "Get Ccrs",
  })
  @get()
  static getCcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccr",
  })
  @post("{id}")
  static createCcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
