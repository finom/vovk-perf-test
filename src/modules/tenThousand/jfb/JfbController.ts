import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfbs")
export default class JfbController {
  @operation({
    summary: "Get Jfbs",
  })
  @get()
  static getJfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfb",
  })
  @post("{id}")
  static createJfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
