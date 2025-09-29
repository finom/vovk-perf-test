import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjs")
export default class JjsController {
  @operation({
    summary: "Get Jjs",
  })
  @get()
  static getJjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjs",
  })
  @post("{id}")
  static createJjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
