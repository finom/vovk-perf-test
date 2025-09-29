import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aats")
export default class AatController {
  @operation({
    summary: "Get Aats",
  })
  @get()
  static getAats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aat",
  })
  @post("{id}")
  static createAat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
