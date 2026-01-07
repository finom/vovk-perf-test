import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcx")
export default class FcxController {
  @operation({
    summary: "Get Fcx",
  })
  @get()
  static getFcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcx",
  })
  @post("{id}")
  static createFcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
