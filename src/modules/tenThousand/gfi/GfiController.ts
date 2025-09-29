import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfis")
export default class GfiController {
  @operation({
    summary: "Get Gfis",
  })
  @get()
  static getGfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfi",
  })
  @post("{id}")
  static createGfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
