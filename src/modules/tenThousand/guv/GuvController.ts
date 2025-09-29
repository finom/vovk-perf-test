import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guvs")
export default class GuvController {
  @operation({
    summary: "Get Guvs",
  })
  @get()
  static getGuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guv",
  })
  @post("{id}")
  static createGuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
