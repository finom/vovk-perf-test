import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnas")
export default class GnaController {
  @operation({
    summary: "Get Gnas",
  })
  @get()
  static getGnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gna",
  })
  @post("{id}")
  static createGna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
