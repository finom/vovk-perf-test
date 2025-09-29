import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acvs")
export default class AcvController {
  @operation({
    summary: "Get Acvs",
  })
  @get()
  static getAcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acv",
  })
  @post("{id}")
  static createAcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
