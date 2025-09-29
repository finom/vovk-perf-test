import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aaos")
export default class AaoController {
  @operation({
    summary: "Get Aaos",
  })
  @get()
  static getAaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aao",
  })
  @post("{id}")
  static createAao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
