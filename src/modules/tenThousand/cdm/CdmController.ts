import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdms")
export default class CdmController {
  @operation({
    summary: "Get Cdms",
  })
  @get()
  static getCdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdm",
  })
  @post("{id}")
  static createCdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
