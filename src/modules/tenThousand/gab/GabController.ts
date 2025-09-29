import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gabs")
export default class GabController {
  @operation({
    summary: "Get Gabs",
  })
  @get()
  static getGabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gab",
  })
  @post("{id}")
  static createGab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
