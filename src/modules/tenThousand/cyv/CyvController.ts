import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyvs")
export default class CyvController {
  @operation({
    summary: "Get Cyvs",
  })
  @get()
  static getCyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyv",
  })
  @post("{id}")
  static createCyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
