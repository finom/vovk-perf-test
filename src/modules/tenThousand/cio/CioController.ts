import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cios")
export default class CioController {
  @operation({
    summary: "Get Cios",
  })
  @get()
  static getCios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cio",
  })
  @post("{id}")
  static createCio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
