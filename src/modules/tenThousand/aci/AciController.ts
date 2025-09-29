import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acis")
export default class AciController {
  @operation({
    summary: "Get Acis",
  })
  @get()
  static getAcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aci",
  })
  @post("{id}")
  static createAci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
