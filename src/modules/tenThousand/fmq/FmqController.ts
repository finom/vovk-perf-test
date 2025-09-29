import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmqs")
export default class FmqController {
  @operation({
    summary: "Get Fmqs",
  })
  @get()
  static getFmqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmq",
  })
  @post("{id}")
  static createFmq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
