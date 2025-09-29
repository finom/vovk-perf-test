import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcms")
export default class GcmController {
  @operation({
    summary: "Get Gcms",
  })
  @get()
  static getGcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcm",
  })
  @post("{id}")
  static createGcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
