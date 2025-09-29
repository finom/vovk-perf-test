import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gaas")
export default class GaaController {
  @operation({
    summary: "Get Gaas",
  })
  @get()
  static getGaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gaa",
  })
  @post("{id}")
  static createGaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
