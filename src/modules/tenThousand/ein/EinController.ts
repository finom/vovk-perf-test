import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eins")
export default class EinController {
  @operation({
    summary: "Get Eins",
  })
  @get()
  static getEins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ein",
  })
  @post("{id}")
  static createEin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
