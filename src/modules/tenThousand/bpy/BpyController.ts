import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpy")
export default class BpyController {
  @operation({
    summary: "Get Bpy",
  })
  @get()
  static getBpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpy",
  })
  @post("{id}")
  static createBpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
