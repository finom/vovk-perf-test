import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahos")
export default class AhoController {
  @operation({
    summary: "Get Ahos",
  })
  @get()
  static getAhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aho",
  })
  @post("{id}")
  static createAho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
