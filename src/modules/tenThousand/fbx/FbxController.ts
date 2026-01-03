import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbxes")
export default class FbxController {
  @operation({
    summary: "Get Fbxes",
  })
  @get()
  static getFbxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbx",
  })
  @post("{id}")
  static createFbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
