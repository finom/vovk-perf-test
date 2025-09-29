import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfies")
export default class GfyController {
  @operation({
    summary: "Get Gfies",
  })
  @get()
  static getGfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfy",
  })
  @post("{id}")
  static createGfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
