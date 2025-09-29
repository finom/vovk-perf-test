import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("caos")
export default class CaoController {
  @operation({
    summary: "Get Caos",
  })
  @get()
  static getCaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cao",
  })
  @post("{id}")
  static createCao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
