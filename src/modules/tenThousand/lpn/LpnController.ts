import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpns")
export default class LpnController {
  @operation({
    summary: "Get Lpns",
  })
  @get()
  static getLpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpn",
  })
  @post("{id}")
  static createLpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
