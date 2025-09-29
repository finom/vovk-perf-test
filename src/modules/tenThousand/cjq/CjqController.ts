import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjqs")
export default class CjqController {
  @operation({
    summary: "Get Cjqs",
  })
  @get()
  static getCjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjq",
  })
  @post("{id}")
  static createCjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
