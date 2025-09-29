import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtrs")
export default class JtrController {
  @operation({
    summary: "Get Jtrs",
  })
  @get()
  static getJtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtr",
  })
  @post("{id}")
  static createJtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
