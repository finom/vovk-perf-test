import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmqs")
export default class LmqController {
  @operation({
    summary: "Get Lmqs",
  })
  @get()
  static getLmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmq",
  })
  @post("{id}")
  static createLmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
