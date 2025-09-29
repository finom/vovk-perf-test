import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpns")
export default class BpnController {
  @operation({
    summary: "Get Bpns",
  })
  @get()
  static getBpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpn",
  })
  @post("{id}")
  static createBpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
