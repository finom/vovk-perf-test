import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpls")
export default class JplController {
  @operation({
    summary: "Get Jpls",
  })
  @get()
  static getJpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpl",
  })
  @post("{id}")
  static createJpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
