import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbx")
export default class FbxController {
  @operation({
    summary: "Get Fbx",
  })
  @get()
  static getFbx = procedure({
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
