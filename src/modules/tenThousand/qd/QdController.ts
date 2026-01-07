import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qd")
export default class QdController {
  @operation({
    summary: "Get Qd",
  })
  @get()
  static getQd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qd",
  })
  @post("{id}")
  static createQd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
