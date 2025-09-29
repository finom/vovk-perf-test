import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gevs")
export default class GevController {
  @operation({
    summary: "Get Gevs",
  })
  @get()
  static getGevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gev",
  })
  @post("{id}")
  static createGev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
