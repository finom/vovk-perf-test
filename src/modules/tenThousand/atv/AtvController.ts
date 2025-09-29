import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atvs")
export default class AtvController {
  @operation({
    summary: "Get Atvs",
  })
  @get()
  static getAtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atv",
  })
  @post("{id}")
  static createAtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
