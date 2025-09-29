import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grcs")
export default class GrcController {
  @operation({
    summary: "Get Grcs",
  })
  @get()
  static getGrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grc",
  })
  @post("{id}")
  static createGrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
