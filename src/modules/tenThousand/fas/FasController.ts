import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fas")
export default class FasController {
  @operation({
    summary: "Get Fas",
  })
  @get()
  static getFas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fas",
  })
  @post("{id}")
  static createFas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
