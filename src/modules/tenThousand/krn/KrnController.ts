import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krns")
export default class KrnController {
  @operation({
    summary: "Get Krns",
  })
  @get()
  static getKrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krn",
  })
  @post("{id}")
  static createKrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
