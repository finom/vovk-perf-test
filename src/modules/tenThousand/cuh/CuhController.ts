import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuhs")
export default class CuhController {
  @operation({
    summary: "Get Cuhs",
  })
  @get()
  static getCuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuh",
  })
  @post("{id}")
  static createCuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
