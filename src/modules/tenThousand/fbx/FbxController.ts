import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbx")
export default class FbxController {
  @operation({
    summary: "Get Fbx",
  })
  @get()
  static getFbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbx",
  })
  @post("{id}")
  static createFbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
