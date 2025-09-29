import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpts")
export default class CptController {
  @operation({
    summary: "Get Cpts",
  })
  @get()
  static getCpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpt",
  })
  @post("{id}")
  static createCpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
