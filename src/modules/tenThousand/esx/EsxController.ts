import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esxes")
export default class EsxController {
  @operation({
    summary: "Get Esxes",
  })
  @get()
  static getEsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esx",
  })
  @post("{id}")
  static createEsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
