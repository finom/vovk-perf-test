import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qx")
export default class QxController {
  @operation({
    summary: "Get Qx",
  })
  @get()
  static getQx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qx",
  })
  @post("{id}")
  static createQx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
