import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbis")
export default class KbiController {
  @operation({
    summary: "Get Kbis",
  })
  @get()
  static getKbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbi",
  })
  @post("{id}")
  static createKbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
