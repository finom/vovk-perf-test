import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmqs")
export default class MmqController {
  @operation({
    summary: "Get Mmqs",
  })
  @get()
  static getMmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmq",
  })
  @post("{id}")
  static createMmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
