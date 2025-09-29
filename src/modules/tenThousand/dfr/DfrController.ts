import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfrs")
export default class DfrController {
  @operation({
    summary: "Get Dfrs",
  })
  @get()
  static getDfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfr",
  })
  @post("{id}")
  static createDfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
