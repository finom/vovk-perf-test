import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjhs")
export default class CjhController {
  @operation({
    summary: "Get Cjhs",
  })
  @get()
  static getCjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjh",
  })
  @post("{id}")
  static createCjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
