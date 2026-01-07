import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpv")
export default class GpvController {
  @operation({
    summary: "Get Gpv",
  })
  @get()
  static getGpv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpv",
  })
  @post("{id}")
  static createGpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
