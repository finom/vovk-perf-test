import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqas")
export default class KqaController {
  @operation({
    summary: "Get Kqas",
  })
  @get()
  static getKqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqa",
  })
  @post("{id}")
  static createKqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
