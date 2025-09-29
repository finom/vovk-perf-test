import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxjs")
export default class JxjController {
  @operation({
    summary: "Get Jxjs",
  })
  @get()
  static getJxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxj",
  })
  @post("{id}")
  static createJxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
