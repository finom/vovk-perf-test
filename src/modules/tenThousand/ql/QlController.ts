import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ql")
export default class QlController {
  @operation({
    summary: "Get Ql",
  })
  @get()
  static getQl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ql",
  })
  @post("{id}")
  static createQl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
