import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecns")
export default class EcnController {
  @operation({
    summary: "Get Ecns",
  })
  @get()
  static getEcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecn",
  })
  @post("{id}")
  static createEcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
