import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cms")
export default class CmsController {
  @operation({
    summary: "Get Cms",
  })
  @get()
  static getCms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cms",
  })
  @post("{id}")
  static createCms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
