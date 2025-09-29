import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnfs")
export default class LnfController {
  @operation({
    summary: "Get Lnfs",
  })
  @get()
  static getLnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnf",
  })
  @post("{id}")
  static createLnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
