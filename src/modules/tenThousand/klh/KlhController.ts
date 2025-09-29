import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klhs")
export default class KlhController {
  @operation({
    summary: "Get Klhs",
  })
  @get()
  static getKlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klh",
  })
  @post("{id}")
  static createKlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
