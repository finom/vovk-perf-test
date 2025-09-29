import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyps")
export default class GypController {
  @operation({
    summary: "Get Gyps",
  })
  @get()
  static getGyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyp",
  })
  @post("{id}")
  static createGyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
