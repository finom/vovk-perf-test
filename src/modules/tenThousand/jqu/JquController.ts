import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqus")
export default class JquController {
  @operation({
    summary: "Get Jqus",
  })
  @get()
  static getJqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqu",
  })
  @post("{id}")
  static createJqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
