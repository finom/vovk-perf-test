import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncxes")
export default class NcxController {
  @operation({
    summary: "Get Ncxes",
  })
  @get()
  static getNcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncx",
  })
  @post("{id}")
  static createNcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
