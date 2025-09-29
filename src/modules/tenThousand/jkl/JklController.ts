import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkls")
export default class JklController {
  @operation({
    summary: "Get Jkls",
  })
  @get()
  static getJkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkl",
  })
  @post("{id}")
  static createJkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
