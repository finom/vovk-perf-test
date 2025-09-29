import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfks")
export default class JfkController {
  @operation({
    summary: "Get Jfks",
  })
  @get()
  static getJfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfk",
  })
  @post("{id}")
  static createJfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
