import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krps")
export default class KrpController {
  @operation({
    summary: "Get Krps",
  })
  @get()
  static getKrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krp",
  })
  @post("{id}")
  static createKrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
