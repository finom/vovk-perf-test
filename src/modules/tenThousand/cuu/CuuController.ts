import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuus")
export default class CuuController {
  @operation({
    summary: "Get Cuus",
  })
  @get()
  static getCuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuu",
  })
  @post("{id}")
  static createCuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
