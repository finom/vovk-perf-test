import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdbs")
export default class CdbController {
  @operation({
    summary: "Get Cdbs",
  })
  @get()
  static getCdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdb",
  })
  @post("{id}")
  static createCdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
