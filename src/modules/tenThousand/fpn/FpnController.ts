import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpns")
export default class FpnController {
  @operation({
    summary: "Get Fpns",
  })
  @get()
  static getFpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpn",
  })
  @post("{id}")
  static createFpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
