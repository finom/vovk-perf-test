import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abas")
export default class AbaController {
  @operation({
    summary: "Get Abas",
  })
  @get()
  static getAbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aba",
  })
  @post("{id}")
  static createAba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
