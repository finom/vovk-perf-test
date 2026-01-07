import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qw")
export default class QwController {
  @operation({
    summary: "Get Qw",
  })
  @get()
  static getQw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qw",
  })
  @post("{id}")
  static createQw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
