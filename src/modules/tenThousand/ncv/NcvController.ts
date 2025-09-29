import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncvs")
export default class NcvController {
  @operation({
    summary: "Get Ncvs",
  })
  @get()
  static getNcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncv",
  })
  @post("{id}")
  static createNcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
