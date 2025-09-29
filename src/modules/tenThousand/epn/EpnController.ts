import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epns")
export default class EpnController {
  @operation({
    summary: "Get Epns",
  })
  @get()
  static getEpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epn",
  })
  @post("{id}")
  static createEpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
