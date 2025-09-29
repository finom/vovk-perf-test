import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfrs")
export default class JfrController {
  @operation({
    summary: "Get Jfrs",
  })
  @get()
  static getJfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfr",
  })
  @post("{id}")
  static createJfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
