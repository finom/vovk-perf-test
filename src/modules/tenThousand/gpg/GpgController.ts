import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpgs")
export default class GpgController {
  @operation({
    summary: "Get Gpgs",
  })
  @get()
  static getGpgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpg",
  })
  @post("{id}")
  static createGpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
