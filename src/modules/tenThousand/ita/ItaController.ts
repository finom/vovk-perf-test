import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itas")
export default class ItaController {
  @operation({
    summary: "Get Itas",
  })
  @get()
  static getItas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ita",
  })
  @post("{id}")
  static createIta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
