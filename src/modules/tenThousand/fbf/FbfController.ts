import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbfs")
export default class FbfController {
  @operation({
    summary: "Get Fbfs",
  })
  @get()
  static getFbfs = procedure({
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
