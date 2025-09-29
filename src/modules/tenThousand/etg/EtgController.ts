import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etgs")
export default class EtgController {
  @operation({
    summary: "Get Etgs",
  })
  @get()
  static getEtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etg",
  })
  @post("{id}")
  static createEtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
