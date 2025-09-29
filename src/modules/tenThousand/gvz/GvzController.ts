import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvzs")
export default class GvzController {
  @operation({
    summary: "Get Gvzs",
  })
  @get()
  static getGvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvz",
  })
  @post("{id}")
  static createGvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
