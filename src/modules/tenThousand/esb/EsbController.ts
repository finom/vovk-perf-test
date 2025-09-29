import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esbs")
export default class EsbController {
  @operation({
    summary: "Get Esbs",
  })
  @get()
  static getEsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esb",
  })
  @post("{id}")
  static createEsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
