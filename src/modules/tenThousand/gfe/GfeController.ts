import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfes")
export default class GfeController {
  @operation({
    summary: "Get Gfes",
  })
  @get()
  static getGfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfe",
  })
  @post("{id}")
  static createGfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
