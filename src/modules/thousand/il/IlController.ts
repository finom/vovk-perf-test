import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ils")
export default class IlController {
  @operation({
    summary: "Get Ils",
  })
  @get()
  static getIls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Il",
  })
  @post("{id}")
  static createIl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
