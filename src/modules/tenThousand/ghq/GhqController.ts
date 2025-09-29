import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghqs")
export default class GhqController {
  @operation({
    summary: "Get Ghqs",
  })
  @get()
  static getGhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghq",
  })
  @post("{id}")
  static createGhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
