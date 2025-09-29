import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixas")
export default class IxaController {
  @operation({
    summary: "Get Ixas",
  })
  @get()
  static getIxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixa",
  })
  @post("{id}")
  static createIxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
