import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msg")
export default class MsgController {
  @operation({
    summary: "Get Msg",
  })
  @get()
  static getMsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msg",
  })
  @post("{id}")
  static createMsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
