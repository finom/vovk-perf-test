import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etfs")
export default class EtfController {
  @operation({
    summary: "Get Etfs",
  })
  @get()
  static getEtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etf",
  })
  @post("{id}")
  static createEtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
