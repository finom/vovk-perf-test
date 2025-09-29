import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyns")
export default class KynController {
  @operation({
    summary: "Get Kyns",
  })
  @get()
  static getKyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyn",
  })
  @post("{id}")
  static createKyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
