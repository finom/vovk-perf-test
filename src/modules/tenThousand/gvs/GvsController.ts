import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvs")
export default class GvsController {
  @operation({
    summary: "Get Gvs",
  })
  @get()
  static getGvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvs",
  })
  @post("{id}")
  static createGvs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
