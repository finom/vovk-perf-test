import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfrs")
export default class LfrController {
  @operation({
    summary: "Get Lfrs",
  })
  @get()
  static getLfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfr",
  })
  @post("{id}")
  static createLfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
