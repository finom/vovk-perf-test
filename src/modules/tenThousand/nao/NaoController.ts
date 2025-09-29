import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("naos")
export default class NaoController {
  @operation({
    summary: "Get Naos",
  })
  @get()
  static getNaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nao",
  })
  @post("{id}")
  static createNao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
