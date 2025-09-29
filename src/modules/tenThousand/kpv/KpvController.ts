import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpvs")
export default class KpvController {
  @operation({
    summary: "Get Kpvs",
  })
  @get()
  static getKpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpv",
  })
  @post("{id}")
  static createKpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
