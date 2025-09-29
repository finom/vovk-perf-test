import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzis")
export default class GziController {
  @operation({
    summary: "Get Gzis",
  })
  @get()
  static getGzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzi",
  })
  @post("{id}")
  static createGzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
