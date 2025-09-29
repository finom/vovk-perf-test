import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igos")
export default class IgoController {
  @operation({
    summary: "Get Igos",
  })
  @get()
  static getIgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igo",
  })
  @post("{id}")
  static createIgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
