import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djrs")
export default class DjrController {
  @operation({
    summary: "Get Djrs",
  })
  @get()
  static getDjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djr",
  })
  @post("{id}")
  static createDjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
