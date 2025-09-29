import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpns")
export default class DpnController {
  @operation({
    summary: "Get Dpns",
  })
  @get()
  static getDpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpn",
  })
  @post("{id}")
  static createDpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
