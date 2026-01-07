import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qs")
export default class QsController {
  @operation({
    summary: "Get Qs",
  })
  @get()
  static getQs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qs",
  })
  @post("{id}")
  static createQs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
