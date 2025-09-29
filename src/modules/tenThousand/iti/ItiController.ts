import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itis")
export default class ItiController {
  @operation({
    summary: "Get Itis",
  })
  @get()
  static getItis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iti",
  })
  @post("{id}")
  static createIti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
