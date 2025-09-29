import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffvs")
export default class FfvController {
  @operation({
    summary: "Get Ffvs",
  })
  @get()
  static getFfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffv",
  })
  @post("{id}")
  static createFfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
