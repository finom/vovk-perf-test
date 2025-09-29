import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggvs")
export default class GgvController {
  @operation({
    summary: "Get Ggvs",
  })
  @get()
  static getGgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggv",
  })
  @post("{id}")
  static createGgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
