import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njks")
export default class NjkController {
  @operation({
    summary: "Get Njks",
  })
  @get()
  static getNjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njk",
  })
  @post("{id}")
  static createNjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
