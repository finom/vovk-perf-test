import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghps")
export default class GhpController {
  @operation({
    summary: "Get Ghps",
  })
  @get()
  static getGhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghp",
  })
  @post("{id}")
  static createGhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
