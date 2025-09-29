import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncms")
export default class NcmController {
  @operation({
    summary: "Get Ncms",
  })
  @get()
  static getNcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncm",
  })
  @post("{id}")
  static createNcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
