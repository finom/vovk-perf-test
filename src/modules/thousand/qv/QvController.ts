import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qv")
export default class QvController {
  @operation({
    summary: "Get Qv",
  })
  @get()
  static getQv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qv",
  })
  @post("{id}")
  static createQv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
