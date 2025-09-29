import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kszs")
export default class KszController {
  @operation({
    summary: "Get Kszs",
  })
  @get()
  static getKszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksz",
  })
  @post("{id}")
  static createKsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
