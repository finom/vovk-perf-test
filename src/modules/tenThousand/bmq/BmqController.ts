import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmqs")
export default class BmqController {
  @operation({
    summary: "Get Bmqs",
  })
  @get()
  static getBmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmq",
  })
  @post("{id}")
  static createBmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
