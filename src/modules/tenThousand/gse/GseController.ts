import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gses")
export default class GseController {
  @operation({
    summary: "Get Gses",
  })
  @get()
  static getGses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gse",
  })
  @post("{id}")
  static createGse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
