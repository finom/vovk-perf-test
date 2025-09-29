import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcjs")
export default class JcjController {
  @operation({
    summary: "Get Jcjs",
  })
  @get()
  static getJcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcj",
  })
  @post("{id}")
  static createJcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
