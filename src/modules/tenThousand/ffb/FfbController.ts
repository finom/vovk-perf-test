import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffbs")
export default class FfbController {
  @operation({
    summary: "Get Ffbs",
  })
  @get()
  static getFfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffb",
  })
  @post("{id}")
  static createFfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
