import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fas")
export default class FaController {
  @operation({
    summary: "Get Fas",
  })
  @get()
  static getFas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fa",
  })
  @post("{id}")
  static createFa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
