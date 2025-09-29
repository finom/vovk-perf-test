import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knos")
export default class KnoController {
  @operation({
    summary: "Get Knos",
  })
  @get()
  static getKnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kno",
  })
  @post("{id}")
  static createKno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
