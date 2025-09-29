import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilrs")
export default class IlrController {
  @operation({
    summary: "Get Ilrs",
  })
  @get()
  static getIlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilr",
  })
  @post("{id}")
  static createIlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
