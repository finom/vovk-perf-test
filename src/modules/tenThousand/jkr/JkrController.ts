import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkrs")
export default class JkrController {
  @operation({
    summary: "Get Jkrs",
  })
  @get()
  static getJkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkr",
  })
  @post("{id}")
  static createJkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
