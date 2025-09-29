import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpas")
export default class FpaController {
  @operation({
    summary: "Get Fpas",
  })
  @get()
  static getFpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpa",
  })
  @post("{id}")
  static createFpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
