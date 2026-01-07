import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbp")
export default class FbpController {
  @operation({
    summary: "Get Fbp",
  })
  @get()
  static getFbp = procedure({
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
