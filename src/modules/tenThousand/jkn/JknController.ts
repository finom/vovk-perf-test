import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkns")
export default class JknController {
  @operation({
    summary: "Get Jkns",
  })
  @get()
  static getJkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkn",
  })
  @post("{id}")
  static createJkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
