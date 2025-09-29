import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbks")
export default class CbkController {
  @operation({
    summary: "Get Cbks",
  })
  @get()
  static getCbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbk",
  })
  @post("{id}")
  static createCbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
