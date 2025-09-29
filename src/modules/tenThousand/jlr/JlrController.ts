import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlrs")
export default class JlrController {
  @operation({
    summary: "Get Jlrs",
  })
  @get()
  static getJlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlr",
  })
  @post("{id}")
  static createJlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
