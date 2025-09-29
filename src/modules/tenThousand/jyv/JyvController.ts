import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyvs")
export default class JyvController {
  @operation({
    summary: "Get Jyvs",
  })
  @get()
  static getJyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyv",
  })
  @post("{id}")
  static createJyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
