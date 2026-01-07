import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auv")
export default class AuvController {
  @operation({
    summary: "Get Auv",
  })
  @get()
  static getAuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auv",
  })
  @post("{id}")
  static createAuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
