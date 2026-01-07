import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drm")
export default class DrmController {
  @operation({
    summary: "Get Drm",
  })
  @get()
  static getDrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drm",
  })
  @post("{id}")
  static createDrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
