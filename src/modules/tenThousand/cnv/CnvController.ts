import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnvs")
export default class CnvController {
  @operation({
    summary: "Get Cnvs",
  })
  @get()
  static getCnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnv",
  })
  @post("{id}")
  static createCnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
