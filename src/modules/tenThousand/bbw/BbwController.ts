import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbws")
export default class BbwController {
  @operation({
    summary: "Get Bbws",
  })
  @get()
  static getBbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbw",
  })
  @post("{id}")
  static createBbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
