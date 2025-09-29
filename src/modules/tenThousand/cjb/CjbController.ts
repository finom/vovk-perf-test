import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjbs")
export default class CjbController {
  @operation({
    summary: "Get Cjbs",
  })
  @get()
  static getCjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjb",
  })
  @post("{id}")
  static createCjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
