import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gals")
export default class GalController {
  @operation({
    summary: "Get Gals",
  })
  @get()
  static getGals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gal",
  })
  @post("{id}")
  static createGal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
