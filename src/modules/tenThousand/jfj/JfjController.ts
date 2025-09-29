import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfjs")
export default class JfjController {
  @operation({
    summary: "Get Jfjs",
  })
  @get()
  static getJfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfj",
  })
  @post("{id}")
  static createJfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
