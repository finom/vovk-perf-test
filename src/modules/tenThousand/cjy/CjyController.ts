import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjies")
export default class CjyController {
  @operation({
    summary: "Get Cjies",
  })
  @get()
  static getCjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjy",
  })
  @post("{id}")
  static createCjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
