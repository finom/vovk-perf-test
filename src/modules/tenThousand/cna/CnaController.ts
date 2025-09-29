import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnas")
export default class CnaController {
  @operation({
    summary: "Get Cnas",
  })
  @get()
  static getCnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cna",
  })
  @post("{id}")
  static createCna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
