import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqs")
export default class KqsController {
  @operation({
    summary: "Get Kqs",
  })
  @get()
  static getKqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqs",
  })
  @post("{id}")
  static createKqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
