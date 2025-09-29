import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjks")
export default class JjkController {
  @operation({
    summary: "Get Jjks",
  })
  @get()
  static getJjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjk",
  })
  @post("{id}")
  static createJjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
