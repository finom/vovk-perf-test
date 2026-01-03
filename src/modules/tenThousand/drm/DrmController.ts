import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drms")
export default class DrmController {
  @operation({
    summary: "Get Drms",
  })
  @get()
  static getDrms = procedure({
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
