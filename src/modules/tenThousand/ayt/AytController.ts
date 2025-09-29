import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayts")
export default class AytController {
  @operation({
    summary: "Get Ayts",
  })
  @get()
  static getAyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayt",
  })
  @post("{id}")
  static createAyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
