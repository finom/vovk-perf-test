import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecfs")
export default class EcfController {
  @operation({
    summary: "Get Ecfs",
  })
  @get()
  static getEcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecf",
  })
  @post("{id}")
  static createEcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
