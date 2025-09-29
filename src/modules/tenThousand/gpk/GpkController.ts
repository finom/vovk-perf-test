import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpks")
export default class GpkController {
  @operation({
    summary: "Get Gpks",
  })
  @get()
  static getGpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpk",
  })
  @post("{id}")
  static createGpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
