import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grbs")
export default class GrbController {
  @operation({
    summary: "Get Grbs",
  })
  @get()
  static getGrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grb",
  })
  @post("{id}")
  static createGrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
