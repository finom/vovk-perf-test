import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdvs")
export default class CdvController {
  @operation({
    summary: "Get Cdvs",
  })
  @get()
  static getCdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdv",
  })
  @post("{id}")
  static createCdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
