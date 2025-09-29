import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdws")
export default class CdwController {
  @operation({
    summary: "Get Cdws",
  })
  @get()
  static getCdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdw",
  })
  @post("{id}")
  static createCdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
