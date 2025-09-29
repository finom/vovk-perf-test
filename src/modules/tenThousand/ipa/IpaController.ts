import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipas")
export default class IpaController {
  @operation({
    summary: "Get Ipas",
  })
  @get()
  static getIpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipa",
  })
  @post("{id}")
  static createIpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
