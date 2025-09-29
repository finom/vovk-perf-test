import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgjs")
export default class JgjController {
  @operation({
    summary: "Get Jgjs",
  })
  @get()
  static getJgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgj",
  })
  @post("{id}")
  static createJgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
