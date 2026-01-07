import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcm")
export default class FcmController {
  @operation({
    summary: "Get Fcm",
  })
  @get()
  static getFcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcm",
  })
  @post("{id}")
  static createFcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
