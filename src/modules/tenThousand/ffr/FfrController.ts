import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffrs")
export default class FfrController {
  @operation({
    summary: "Get Ffrs",
  })
  @get()
  static getFfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffr",
  })
  @post("{id}")
  static createFfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
