import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcm")
export default class GcmController {
  @operation({
    summary: "Get Gcm",
  })
  @get()
  static getGcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcm",
  })
  @post("{id}")
  static createGcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
