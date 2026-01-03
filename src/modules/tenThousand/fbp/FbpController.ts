import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbps")
export default class FbpController {
  @operation({
    summary: "Get Fbps",
  })
  @get()
  static getFbps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbp",
  })
  @post("{id}")
  static createFbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
