import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfws")
export default class JfwController {
  @operation({
    summary: "Get Jfws",
  })
  @get()
  static getJfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfw",
  })
  @post("{id}")
  static createJfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
