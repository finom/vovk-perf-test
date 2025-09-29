import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvs")
export default class GvController {
  @operation({
    summary: "Get Gvs",
  })
  @get()
  static getGvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gv",
  })
  @post("{id}")
  static createGv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
