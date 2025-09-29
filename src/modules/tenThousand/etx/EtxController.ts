import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etxes")
export default class EtxController {
  @operation({
    summary: "Get Etxes",
  })
  @get()
  static getEtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etx",
  })
  @post("{id}")
  static createEtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
