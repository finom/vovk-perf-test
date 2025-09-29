import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cod")
export default class CodController {
  @operation({
    summary: "Get Cod",
  })
  @get()
  static getCod = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cod",
  })
  @post("{id}")
  static createCod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
