import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grls")
export default class GrlController {
  @operation({
    summary: "Get Grls",
  })
  @get()
  static getGrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grl",
  })
  @post("{id}")
  static createGrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
