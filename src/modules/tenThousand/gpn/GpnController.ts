import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpns")
export default class GpnController {
  @operation({
    summary: "Get Gpns",
  })
  @get()
  static getGpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpn",
  })
  @post("{id}")
  static createGpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
