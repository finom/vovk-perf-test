import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qn")
export default class QnController {
  @operation({
    summary: "Get Qn",
  })
  @get()
  static getQn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qn",
  })
  @post("{id}")
  static createQn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
