import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krcs")
export default class KrcController {
  @operation({
    summary: "Get Krcs",
  })
  @get()
  static getKrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krc",
  })
  @post("{id}")
  static createKrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
