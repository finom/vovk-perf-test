import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grds")
export default class GrdController {
  @operation({
    summary: "Get Grds",
  })
  @get()
  static getGrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grd",
  })
  @post("{id}")
  static createGrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
