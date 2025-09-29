import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdos")
export default class CdoController {
  @operation({
    summary: "Get Cdos",
  })
  @get()
  static getCdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdo",
  })
  @post("{id}")
  static createCdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
