import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("koks")
export default class KokController {
  @operation({
    summary: "Get Koks",
  })
  @get()
  static getKoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kok",
  })
  @post("{id}")
  static createKok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
