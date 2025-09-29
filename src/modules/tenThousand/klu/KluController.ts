import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klus")
export default class KluController {
  @operation({
    summary: "Get Klus",
  })
  @get()
  static getKlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klu",
  })
  @post("{id}")
  static createKlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
