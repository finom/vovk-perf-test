import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drm")
export default class DrmController {
  @operation({
    summary: "Get Drm",
  })
  @get()
  static getDrm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drm",
  })
  @post("{id}")
  static createDrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
