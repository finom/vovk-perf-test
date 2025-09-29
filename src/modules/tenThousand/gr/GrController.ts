import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grs")
export default class GrController {
  @operation({
    summary: "Get Grs",
  })
  @get()
  static getGrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gr",
  })
  @post("{id}")
  static createGr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
