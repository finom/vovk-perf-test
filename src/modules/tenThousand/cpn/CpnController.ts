import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpns")
export default class CpnController {
  @operation({
    summary: "Get Cpns",
  })
  @get()
  static getCpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpn",
  })
  @post("{id}")
  static createCpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
