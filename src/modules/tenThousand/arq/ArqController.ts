import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arqs")
export default class ArqController {
  @operation({
    summary: "Get Arqs",
  })
  @get()
  static getArqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arq",
  })
  @post("{id}")
  static createArq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
