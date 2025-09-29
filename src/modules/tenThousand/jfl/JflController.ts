import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfls")
export default class JflController {
  @operation({
    summary: "Get Jfls",
  })
  @get()
  static getJfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfl",
  })
  @post("{id}")
  static createJfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
