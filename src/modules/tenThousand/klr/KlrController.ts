import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klrs")
export default class KlrController {
  @operation({
    summary: "Get Klrs",
  })
  @get()
  static getKlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klr",
  })
  @post("{id}")
  static createKlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
