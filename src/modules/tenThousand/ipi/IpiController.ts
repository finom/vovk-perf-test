import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipis")
export default class IpiController {
  @operation({
    summary: "Get Ipis",
  })
  @get()
  static getIpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipi",
  })
  @post("{id}")
  static createIpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
