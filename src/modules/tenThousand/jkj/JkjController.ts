import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkjs")
export default class JkjController {
  @operation({
    summary: "Get Jkjs",
  })
  @get()
  static getJkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkj",
  })
  @post("{id}")
  static createJkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
