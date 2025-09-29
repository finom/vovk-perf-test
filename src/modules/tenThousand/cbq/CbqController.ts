import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbqs")
export default class CbqController {
  @operation({
    summary: "Get Cbqs",
  })
  @get()
  static getCbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbq",
  })
  @post("{id}")
  static createCbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
