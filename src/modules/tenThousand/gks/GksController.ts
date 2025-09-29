import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gks")
export default class GksController {
  @operation({
    summary: "Get Gks",
  })
  @get()
  static getGks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gks",
  })
  @post("{id}")
  static createGks = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
