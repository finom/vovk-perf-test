import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbjs")
export default class JbjController {
  @operation({
    summary: "Get Jbjs",
  })
  @get()
  static getJbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbj",
  })
  @post("{id}")
  static createJbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
