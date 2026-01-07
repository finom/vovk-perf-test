import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpk")
export default class GpkController {
  @operation({
    summary: "Get Gpk",
  })
  @get()
  static getGpk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpk",
  })
  @post("{id}")
  static createGpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
