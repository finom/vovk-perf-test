import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auus")
export default class AuuController {
  @operation({
    summary: "Get Auus",
  })
  @get()
  static getAuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auu",
  })
  @post("{id}")
  static createAuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
