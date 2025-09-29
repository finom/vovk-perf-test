import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csws")
export default class CswController {
  @operation({
    summary: "Get Csws",
  })
  @get()
  static getCsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csw",
  })
  @post("{id}")
  static createCsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
