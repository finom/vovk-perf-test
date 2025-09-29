import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drms")
export default class DrmController {
  @operation({
    summary: "Get Drms",
  })
  @get()
  static getDrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drm",
  })
  @post("{id}")
  static createDrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
