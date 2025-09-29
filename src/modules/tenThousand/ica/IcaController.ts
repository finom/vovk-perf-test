import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icas")
export default class IcaController {
  @operation({
    summary: "Get Icas",
  })
  @get()
  static getIcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ica",
  })
  @post("{id}")
  static createIca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
