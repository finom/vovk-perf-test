import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qg")
export default class QgController {
  @operation({
    summary: "Get Qg",
  })
  @get()
  static getQg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qg",
  })
  @post("{id}")
  static createQg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
