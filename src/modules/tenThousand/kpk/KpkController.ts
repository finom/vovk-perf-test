import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpks")
export default class KpkController {
  @operation({
    summary: "Get Kpks",
  })
  @get()
  static getKpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpk",
  })
  @post("{id}")
  static createKpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
