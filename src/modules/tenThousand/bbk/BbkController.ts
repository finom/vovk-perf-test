import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbks")
export default class BbkController {
  @operation({
    summary: "Get Bbks",
  })
  @get()
  static getBbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbk",
  })
  @post("{id}")
  static createBbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
