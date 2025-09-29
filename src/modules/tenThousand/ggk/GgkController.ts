import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggks")
export default class GgkController {
  @operation({
    summary: "Get Ggks",
  })
  @get()
  static getGgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggk",
  })
  @post("{id}")
  static createGgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
