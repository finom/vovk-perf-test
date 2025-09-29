import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npns")
export default class NpnController {
  @operation({
    summary: "Get Npns",
  })
  @get()
  static getNpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npn",
  })
  @post("{id}")
  static createNpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
