import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aeas")
export default class AeaController {
  @operation({
    summary: "Get Aeas",
  })
  @get()
  static getAeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aea",
  })
  @post("{id}")
  static createAea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
