import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqrs")
export default class JqrController {
  @operation({
    summary: "Get Jqrs",
  })
  @get()
  static getJqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqr",
  })
  @post("{id}")
  static createJqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
