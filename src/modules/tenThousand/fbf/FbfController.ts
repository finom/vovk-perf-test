import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbf")
export default class FbfController {
  @operation({
    summary: "Get Fbf",
  })
  @get()
  static getFbf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbf",
  })
  @post("{id}")
  static createFbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
