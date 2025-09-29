import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbxes")
export default class FbxController {
  @operation({
    summary: "Get Fbxes",
  })
  @get()
  static getFbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbx",
  })
  @post("{id}")
  static createFbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
