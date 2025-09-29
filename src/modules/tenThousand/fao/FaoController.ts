import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("faos")
export default class FaoController {
  @operation({
    summary: "Get Faos",
  })
  @get()
  static getFaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fao",
  })
  @post("{id}")
  static createFao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
