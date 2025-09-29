import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmjs")
export default class JmjController {
  @operation({
    summary: "Get Jmjs",
  })
  @get()
  static getJmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmj",
  })
  @post("{id}")
  static createJmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
