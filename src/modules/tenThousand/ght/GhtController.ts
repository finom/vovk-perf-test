import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghts")
export default class GhtController {
  @operation({
    summary: "Get Ghts",
  })
  @get()
  static getGhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ght",
  })
  @post("{id}")
  static createGht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
