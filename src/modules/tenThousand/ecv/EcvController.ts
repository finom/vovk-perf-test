import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecvs")
export default class EcvController {
  @operation({
    summary: "Get Ecvs",
  })
  @get()
  static getEcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecv",
  })
  @post("{id}")
  static createEcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
