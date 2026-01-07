import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qp")
export default class QpController {
  @operation({
    summary: "Get Qp",
  })
  @get()
  static getQp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qp",
  })
  @post("{id}")
  static createQp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
