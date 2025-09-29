import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agas")
export default class AgaController {
  @operation({
    summary: "Get Agas",
  })
  @get()
  static getAgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aga",
  })
  @post("{id}")
  static createAga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
