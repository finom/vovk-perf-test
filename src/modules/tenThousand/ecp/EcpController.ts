import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecps")
export default class EcpController {
  @operation({
    summary: "Get Ecps",
  })
  @get()
  static getEcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecp",
  })
  @post("{id}")
  static createEcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
