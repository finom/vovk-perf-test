import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvvs")
export default class GvvController {
  @operation({
    summary: "Get Gvvs",
  })
  @get()
  static getGvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvv",
  })
  @post("{id}")
  static createGvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
