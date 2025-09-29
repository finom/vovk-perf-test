import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etms")
export default class EtmController {
  @operation({
    summary: "Get Etms",
  })
  @get()
  static getEtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etm",
  })
  @post("{id}")
  static createEtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
