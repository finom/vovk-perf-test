import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbqs")
export default class BbqController {
  @operation({
    summary: "Get Bbqs",
  })
  @get()
  static getBbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbq",
  })
  @post("{id}")
  static createBbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
