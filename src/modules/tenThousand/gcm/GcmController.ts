import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcm")
export default class GcmController {
  @operation({
    summary: "Get Gcm",
  })
  @get()
  static getGcm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcm",
  })
  @post("{id}")
  static createGcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
