import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecxes")
export default class EcxController {
  @operation({
    summary: "Get Ecxes",
  })
  @get()
  static getEcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecx",
  })
  @post("{id}")
  static createEcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
